import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function Header({ show }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Our Store <Typography variant="h5"> Browse our Categories </Typography>
        </Typography>

        <Button color="inherit" onClick={show}>Cart</Button>
        <ShoppingCartIcon />
        </Toolbar>
    </AppBar>
  );
}

export default Header;
