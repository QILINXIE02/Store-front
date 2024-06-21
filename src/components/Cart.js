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

  const handleCheckout = () => {
    alert('Initiating checkout process...');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map(item => (
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
        ))
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
