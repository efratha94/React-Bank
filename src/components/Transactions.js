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
        const categories = []
        let categoryAmount = 0
        transactions.map(a => {
            if (!categories.includes(a.category)) {
                categories.push(a.category)
            }

        })

        return (
            <div className="transactions-page">
                <div id="transactions-by-category">
                    {categories.map(category =>
                        <div>
                            <Link to={`/transactions/${category}`} className="link" key={category}><h3>{category}</h3></Link>
                            {transactions.map(transaction => {
                                if (transaction.category === category) {
                                    categoryAmount += transaction.amount
                                }
                            })}
                            <h5>{categoryAmount}</h5>
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