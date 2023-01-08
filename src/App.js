import React from 'react';
import './App.css';

import Basket from './components/Basket';
import Header from './components/Header';
import ProductSnippetContainer from './components/ProductSnippetContainer';
import products from "./data/products.json";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products,
            cart: []
        }
        this.addToCart = this.addToCart.bind(this);
        // this.removeFromCart = this.removeFromCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    addToCart(product) {
        if (this.state.cart.find(p => p.id === product.id)) {
            return;
        }
        this.setState({
            cart: [...this.state.cart, product]
        })
        this.render()
    }

    removeFromCart(product) {
        this.setState({
            cart: this.state.cart.filter(p => p.id !== product.id)
        })
    }

    clearCart() {
        this.setState({
            cart: []
        })
    }

    makeOrder() {
        console.log('Make order compleate!');
        this.clearCart();
    }

    render() {
        return (
            <div className="App" >
                <Header
                    products={this.state.cart}
                />
                <Basket
                    cart={this.state.cart}
                    makeOrder={this.makeOrder}
                    clearCart={this.clearCart}
                />
                <ProductSnippetContainer
                    products={this.state.products}
                    addToCart={this.addToCart}
                />
            </div >
        )
    }
}

export default App;
