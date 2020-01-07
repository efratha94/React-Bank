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
        const transactions = [...this.props.data]
        const categories = {}
        transactions.map(a => {
            if (!categories.hasOwnProperty(a.category)) {
                categories[a.category] = a.amount
            } else {
                categories[a.category] += a.amount
            }
        })

        return (
            <div id="transactions-page">
                <div id="transactions-by-category">
                    {Object.keys(categories).map(category =>
                        <div>
                            <Link to={`/transactions/${category}`} className="link" key={category}><h3 className="category-link">{category}</h3></Link>
                            <h5 className="total-category-sum">{categories[category]} NIS</h5>
                        </div>
                    )}
                </div>
                <div id="all-transactions-seperate">
                    {transactions.map(transaction =>
                        <Transaction key={transaction.vendor + transaction.category} transaction={transaction} deleteTransaction={this.props.deleteTransaction} />
                    )}

                </div>
            </div>
        )
    }

}


export default Transactions