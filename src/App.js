import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Operations from "./components/Operations"
import Transaction from "./components/Transaction"
import Transactions from "./components/Transactions"
// import api from "./api/api"
// import mongoose from "mongoose"
import axios from "axios"
// import bodyParser from "body-parser"

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }

  async getTransactions(){
    return axios.get("http://localhost:3002/transactions")
  }

  async componentDidMount(){
    const something = await this.getTransactions()
    console.log(something)
  }

  transaction = (object) => {
    let allTransactions = [...this.state.dummyData]
    allTransactions.push(object)
    this.setState({
      dummyData: allTransactions
    })
  }

  deleteTransaction = (amount, vendor) => {
    let amountDeleted = amount
    let vendorDeleted = vendor
    let allTransactions = [...this.state.dummyData]
    let transactionToDelete = allTransactions.find(transaction => 
      transaction.vendor === vendorDeleted && transaction.amount === amountDeleted
    )
    let indexOfTransactionToDelete = allTransactions.indexOf(transactionToDelete)
    allTransactions.splice(indexOfTransactionToDelete, 1)
    this.setState({
      dummyData: allTransactions
    })
  }

  render() {
    let amount = 0
    this.state.dummyData.map(dummy => amount += dummy.amount)

    return (
      <Router>
        <div>
          <div id="main-links">
            <Link to="/" className="link">Home</Link>
            <Link to="/transactions" className="link">Transactions</Link>
            <Link to="/operations" className="link">Operations</Link>
          </div>
          <div id="currentBalance">
            Total Balance: {amount}
          </div>
          <Route path="/transactions" exact render={({ match }) => <Transactions match={match} data={this.state.dummyData} deleteTransaction={this.deleteTransaction} />} />
          <Route path="/operations" exact render={({ match }) => <Operations match={match} data={this.state.dummyData} transaction={this.transaction} />} />
        </div>
      </Router>
    )
  }
}

export default App