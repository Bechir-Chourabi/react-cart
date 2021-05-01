import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} Products
                </div>
                <div className="filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="heighest">Heighest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter {" "}
                <select value={this.props.type} onChange={this.props.filterProducts}>
                    <option value="">ALL</option>
                    <option value="FREE">FREE</option>
                    <option value="PREMIUM">PREMIUM</option>
                    </select>
                    </div>
            </div>
        )
        
    }
}
