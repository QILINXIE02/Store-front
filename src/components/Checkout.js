import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Typography, Card, CardContent, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: theme.shadows[3],
  },
  section: {
    margin: theme.spacing(3, 0),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Checkout() {
  const classes = useStyles();
  const cartItems = useSelector(state => state.cart.cartItems);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>Order Summary</Typography>
        {cartItems.map((item) => (
          <Typography key={item.id}>{item.name} - ${item.price} x {item.quantity}</Typography>
        ))}
        <Typography variant="h6" className={classes.section}>Total: ${calculateTotal()}</Typography>

        <Typography variant="h5" className={classes.title}>Billing Address</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Full Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="City" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="State" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="ZIP Code" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <Typography variant="h5" className={classes.title}>Payment Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Credit Card #" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Expiration (MM/DD/YYYY)" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="CVV" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" className={classes.button} fullWidth>
          PLACE YOUR ORDER
        </Button>
      </CardContent>
    </Card>
  );
}

export default Checkout;
