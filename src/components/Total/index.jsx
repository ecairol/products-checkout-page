import React, { Component } from 'react';

class Total extends Component {
  state = {  }

  subtotal = () => {
    let subtotal = this.props.products.reduce((prev, current) => {
      return prev + (current.price * current.quantity);
    }, 0);
    return parseFloat(subtotal.toFixed(2));
  }

  taxes = () => {
    let taxRate = this.props.tax;
    let taxes = this.props.products.reduce((prev, current) => {
      return prev + (current.price * current.quantity * taxRate);
    }, 0);
    return parseFloat(taxes.toFixed(2));
  };

  total = () => {
    return this.subtotal() + this.taxes();
  };

  render() { 
    return (<div>
      <p>Subtotal: ${this.subtotal()}</p>
      <p>Taxes: ${this.taxes()}</p>
      <p>Total: ${this.total()}</p>
    </div>);
  }
}
 
export default Total;