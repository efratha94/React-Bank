import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Transaction from "./Transaction"

class Transactions extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const transactions = this.props.data
        // console.log(transactions)


        return (
            <div>
                {transactions.map(transaction =>
                    <Transaction key={transaction.vendor + transaction.category} transaction={transaction} />
                )}
            </div>
        )
    }
}

export default Transactions