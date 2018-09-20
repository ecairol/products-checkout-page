import React, { Component } from 'react';
import './styles.css';
import ProductSubtotal from '../ProductSubtotal';

class ProductList extends Component {
  state = {
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
      <h1>List of products</h1>
      {this.state.products.map(product => {
        return  <ProductSubtotal 
                  product={product}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}>
                </ProductSubtotal>
      })}
    </div>);
  }
}
 
export default ProductList;