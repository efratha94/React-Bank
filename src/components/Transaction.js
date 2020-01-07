import React, { Component } from 'react';
import { FaMinusCircle } from "react-icons/fa"

class Transaction extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    deleteTransaction = () =>{
        let amount = this.props.transaction.amount
        let vendor = this.props.transaction.vendor
        this.props.deleteTransaction(amount, vendor)
    }

    render() {
        const transaction = this.props.transaction
        
        return (
            <div key={transaction.vendor + transaction.category} className="transaction">
                <span className="delete-transaction" onClick={this.deleteTransaction}><FaMinusCircle /></span>
                <h5 className="detailed-transaction">{transaction.vendor}</h5>
                {transaction.amount > 0 ? <h6 className="income detailed-transaction">{transaction.amount} NIS</h6> : <h6 className="expense detailed-transaction">{transaction.amount} NIS</h6>}
                <h6 className="detailed-transaction">{transaction.category}</h6>
            </div>
        )
    }
}

export default Transaction