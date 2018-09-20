import React, { Component } from 'react';
import './styles.css';
import ProductSubtotal from '../ProductSubtotal';
import Total from '../Total';

class ProductList extends Component {
  state = {
    tax: 0.01,
    products: [
      { id:1, name:"Laptop", price:1450, quantity:1 },
      { id:2, name:"Magic Mouse", price:180, quantity:1 },
      { id:3, name:"Apple TV", price:120, quantity:1 },
      { id:4, name:"FireTV", price:80, quantity:1 },
    ]
  };

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {...product};
    products[index].quantity++;
    this.setState({products})
  }

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {...product};
    products[index].quantity ? products[index].quantity-- : 0;
    this.setState({products})
  }

  render() { 
    return (<div className="product-list-component">
      <h1>Your Cart</h1>

      {this.state.products.map(product => {
        return  <ProductSubtotal
                  key={product.id} 
                  product={product}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}>
                </ProductSubtotal>
      })}
      
      <Total products={this.state.products} tax={this.state.tax}></Total>
    </div>);
  }
}
 
export default ProductList;