import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Operations from "./components/Operations"
import Transaction from "./components/Transaction"
import Transactions from "./components/Transactions"

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

  transaction = (object) => {
    let allTransactions = [...this.state.dummyData]
    allTransactions.push(object)
    this.setState({
      dummyData: allTransactions
    }, function(){
      console.log(this.state.dummyData)
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
          <Route path="/transactions" exact render={({ match }) => <Transactions match={match} data={this.state.dummyData} />} />
          <Route path="/operations" exact render={({ match }) => <Operations match={match} data={this.state.dummyData} transaction={this.transaction} />} />
        </div>
      </Router>
    )
  }
}

export default App