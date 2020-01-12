import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Operations extends Component{
    constructor(){
        super();
        this.state = {
            amount: Number,
            vendor: String,
            category: String
        }
    }

    transaction = (event) => {
        if (event.target.className === "deposit"){
            let newDeposit = {"amount": Math.abs(this.state.amount), "vendor": this.state.vendor, "category": this.state.category}
            this.props.transaction(newDeposit)
        } else {
            let newWithdrawl = {"amount": -Math.abs(this.state.amount), "vendor": this.state.vendor, "category": this.state.category}
            this.props.transaction(newWithdrawl)
        }
    }

    handleInput = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div id="operations-page">
            <div id="operation-inputs">
                <input placeholder="Amount" type="number" name="amount" onChange={this.handleInput} value={this.state.amount} required="required"/>
                <input placeholder="Vendor" type="text" name="vendor" onChange={this.handleInput} value={this.state.vendor} required="required"/>
                <input placeholder="Cateory" type="text" name="category" onChange={this.handleInput} value={this.state.category} required="required"/>
            </div>
            <div id="operation-buttons">
            <Link to="/transactions" className="link"><button type="submit" onClick={this.transaction} className="deposit">Deposit</button> </Link>
            <Link to="/transactions" className="link"><button type="submit" onClick={this.transaction} className="withdraw">Withdraw</button></Link>
            </div>
            </div>
        )
    }
}


export default Operations