import React, { Component } from 'react';
import './styles.css'

class ProductSubtotal extends Component {
  totalPrice = () => {
    return this.props.product.price * this.props.product.quantity;
  }
  
  render() { 
    return (<div className="product-subtotal-component">
      <p>
        <button onClick={() => this.props.onDecrement(this.props.product)}>-</button>
        {this.props.product.quantity} {this.props.product.name}
        <button onClick={() => this.props.onIncrement(this.props.product)}>+</button>
      </p>
      <p>
        <strong>${this.totalPrice()}</strong>
      </p>
    </div>);
  }
}
 
export default ProductSubtotal;