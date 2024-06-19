// src/components/Cart.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item._id}>
            {item.name} - {item.price} x 
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemove(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
