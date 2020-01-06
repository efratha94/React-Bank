import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transaction from "./Transaction"

class Transactions extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    deleteTransaction = (amount, vendor) => {
        this.props.deleteTransaction(amount, vendor)
    }

    render() {
        const transactions = this.props.data

        return (
            <div>
                {transactions.map(transaction =>
                    <Transaction key={transaction.vendor + transaction.category} transaction={transaction} deleteTransaction={this.props.deleteTransaction}/>
                )}
            </div>
        )
    }
}

export default Transactions