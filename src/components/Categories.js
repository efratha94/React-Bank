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
                    <div className="data-for-each-transaction-in-category">
                        <div key={data.vendor + data.category}>
                            {data.amount > 0 ? <h4 className="income">{data.amount} NIS</h4> : <h4 className="expense">{data.amount} NIS</h4>}
                            <h5>{data.vendor}</h5>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Category