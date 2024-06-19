// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromCart } from '../cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity(productId, newQuantity));
    }
  };

  return (
    <div style={{ width: '300px', position: 'fixed', right: 0, top: '64px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', background: 'white' }}>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item._id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}>-</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleUpdateQuantity(item._id, parseInt(e.target.value))}
          />
          <button onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}>+</button>
          <button onClick={() => dispatch(removeFromCart(item._id))}>Remove</button>
          {item.quantity >= item.inventoryCount && (
            <p>This is the maximum of our inventory.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
