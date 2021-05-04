import React, { Component } from 'react';
import {connect} from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts? (
            <div>Loading...</div>
            ) : (

            <div className="filter">
                <div className="filter-result">
                    {this.props.filteredProducts.length} Products
                </div>
                <div className="filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={(e) =>this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="heighest">Heighest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter {" "}
                <select value={this.props.type} onChange={(e) =>this.props.filterProducts(this.props.products, e.target.value)}>
                    <option value="">ALL</option>
                    <option value="FREE">FREE</option>
                    <option value="PREMIUM">PREMIUM</option>
                    </select>
                    </div>
            </div>
        ));
        
    }
}
export default connect((state =>({
    type: state.products.type,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,

})),{
filterProducts,
sortProducts,
}
)(Filter);