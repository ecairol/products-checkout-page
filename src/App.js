import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">eCommerce</h1>
        </header>
        <main className="App__main">
          <ProductList></ProductList>
        </main>
      </div>
    );
  }
}

export default App;
