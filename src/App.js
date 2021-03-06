import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Operations from "./components/Operations"
import Transactions from "./components/Transactions"
import Category from "./components/Categories"
import axios from "axios"
import "./App.css"


class App extends Component {
  constructor() {
    super();
    this.state = {
      balanceData: []
    }
  }

  async getTransactions(){
    return axios.get("http://localhost:3002/transactions")
  }

  async componentDidMount(){
    const transactionsInDB = await this.getTransactions()
    let dataToUpdate = [...this.state.balanceData]
    transactionsInDB.data.map(transaction => {dataToUpdate.push(transaction)})
    this.setState({
      balanceData: dataToUpdate
    })
  }

  async newOperations(transactionToSave){
    return axios.post("http://localhost:3002/transaction", transactionToSave)
  }

  transaction = async (object) => {
    const TransactionsToSaveToDB = await this.newOperations(object)
    let allTransactions = [...this.state.balanceData]
    allTransactions.push(TransactionsToSaveToDB.data)
    this.setState({
      balanceData: allTransactions
    })
  }

  deleteTransaction = async (idToDelete) => {
    return axios.delete("http://localhost:3002/transaction", {data: {id: idToDelete}})
  }
  
  deleteThisTransaction = async (amount, vendor) => {
    const amountDeleted = amount
    const vendorDeleted = vendor
    let allTransactions = [...this.state.balanceData]
    let transactionToDelete = allTransactions.find(transaction => 
      transaction.vendor === vendorDeleted && transaction.amount === amountDeleted
    )
    let idToDelete = transactionToDelete._id
    let deleteThis = await this.deleteTransaction(idToDelete)

    const newData = allTransactions.find(deleted => deleted._id === deleteThis.data)
    const indexToDelete = allTransactions.indexOf(newData)
    allTransactions.splice(indexToDelete, 1)
    this.setState({
      balanceData: allTransactions
    })
  }

  render() {
    let balanceData = [...this.state.balanceData]
    let amount = 0
    balanceData.map(dummy => amount += dummy.amount)
    
    return (
      <Router>
        <div id="container">
          <div id="main-links">
            <Link to="/" className="link">Home</Link>
            <Link to="/transactions" className="link">Transactions</Link>
            <Link to="/operations" className="link">Operations</Link>
          </div>
          {amount > 500 ? <div id="currentBalance" className="income">Total Balance: {amount}</div> : <div id="currentBalance" className="expense">Total Balance: {amount}</div>}
          <Route path="/transactions" exact render={({ match }) => <Transactions match={match} data={this.state.balanceData} deleteTransaction={this.deleteThisTransaction} />} />
          <Route path="/operations" exact render={({ match }) => <Operations match={match} data={this.state.balanceData} transaction={this.transaction} />} />
          <Route path="/transactions/:category" exact render={({match}) => <Category match={match} data={this.state.balanceData} transaction={this.transaction}/>} />
        </div>
      </Router>
    )
  }
}

export default App