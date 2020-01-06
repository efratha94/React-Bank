import React, { Component } from 'react';


class Transaction extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const transaction = this.props.transaction

        return (
            <div key={transaction.vendor + transaction.category} className="transaction">
                <span className="delete-transaction">Delete Transaction</span>
                <h5>{transaction.vendor}</h5>
                <h6>{transaction.amount}</h6>
                <h6>{transaction.category}</h6>
            </div>
        )
    }
}

export default Transaction