import React from 'react';
import {CartContext} from "../../context/cart";

const Cart = () => {
  const {cart, total} = React.useContext(CartContext);
  console.log({cart, total})
  return (
    <div>
      <h1>Cart Items</h1>
    </div>
  )
}

export default Cart;
