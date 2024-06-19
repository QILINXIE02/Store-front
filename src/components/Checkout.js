// src/components/Checkout.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { clearCart } from '../cartActions';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCheckout = () => {
    // Implement checkout logic here
    dispatch(clearCart());
  };

  return (
    <div>
      <Typography variant="h4">Checkout</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item._id}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Complete Purchase
      </Button>
    </div>
  );
};

export default Checkout;
