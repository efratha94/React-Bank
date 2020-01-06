import React, { Component } from 'react';

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

    // { amount: 3200, vendor: "Elevation", category: "Salary" }
    render(){
        return (
            <div>
            <div id="operation-inputs">
                <input placeholder="Amount" type="number" name="amount" onChange={this.handleInput} value={this.state.amount}/><br></br>
                <input placeholder="Vendor" type="text" name="vendor" onChange={this.handleInput} value={this.state.vendor}/><br></br>
                <input placeholder="Cateory" type="text" name="category" onChange={this.handleInput} value={this.state.category}/><br></br>
            </div>
            <div id="operation-buttons">
                <button type="submit" onClick={this.transaction} className="deposit">Deposit</button>
                <button type="submit" onClick={this.transaction} className="withdraw">Withdraw</button>
            </div>
            </div>
        )
    }
}


export default Operations