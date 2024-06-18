import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
        <Typography variant="h6" className={classes.title}>
          Virtual Store
        </Typography>
        <Button color="inherit" onClick={show}>Cart</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
