import React from "react";
import Header from './components/ui/molecules/Header'
// Route
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Cart from './components/pages/Cart'
import Checkout from './components/pages/Checkout'
import Error from './components/pages/Error';
import Login from './components/pages/Login'
import Products from './components/pages/Products'
import ProductDetails from './components/pages/ProductDetails'

export default function App() {
  return <Router>
    <Header />
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cart" >
        <Cart />
      </Route>
      <Route path="/checkout" >
        <Checkout />
      </Route>
      <Route path="/login" >
        <Login />
      </Route>
      <Route exact path="/products" >
        <Products />
      </Route>
      <Route 
      path="/products/:id" 
      children={<ProductDetails ></ProductDetails>}
      ></Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
}
