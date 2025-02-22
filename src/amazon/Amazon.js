import React from 'react';
import Header from '../amazon/Header';

import Panel from '../amazon/Panel';
import { product } from '../amazon/Data';

export default class Amazon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: product,
      cartArray: [],
      isCartVisibe: false,  //state to toggle cart visibiity
    };

  }
  // Function to add items to cart
  addToCart = (product) => {
    console.log("add", product)
    this.setState({ cartArray: [product, ...this.state.cartArray] })
  }

  // Function to toggle cart visibility
  toggleCart = () => {
    this.setState({ isCartVisible: !this.state.isCartVisible });
  };

  render() {
    console.log("Product Array:", this.state.productArray);
    return (
      <div>
<Header cartArray={this.state.cartArray} toggleCart={this.toggleCart} />
        
        {/* Show either the cart or the product list */}
        {this.state.isCartVisible ? (
          <Panel productArray={this.state.cartArray} addToCart={() => {}} isCartView={true} />
        ) : (
          <Panel productArray={this.state.productArray} addToCart={this.addToCart} isCartView={false} />
        )}

      </div>
    )
  }
}
