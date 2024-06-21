import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header({ show }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Store
        </Typography>
        <Button color="inherit" onClick={show}>Cart</Button>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/checkout">Checkout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
