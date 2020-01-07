import React, { Component } from 'react';
class Category extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const balanceData = this.props.data
        const match = this.props.match
        const category = match.params.category
        const dataByCategory = []
        balanceData.map(data => {
            if (data.category === category) {
                dataByCategory.push(data)
            }
        })

        return (
            <div className="data-from-each-category">
                <h2 id="expense-category">{category}</h2>
                {dataByCategory.map(data =>
                    <div className="data-for-each-transaction-in-category" key={data.vendor + data.category}>
                        <h4>{data.amount} NIS</h4>
                        <h6>{data.vendor}</h6>
                    </div>
                )}
            </div>
        )
    }
}

export default Category