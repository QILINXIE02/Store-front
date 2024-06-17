import React from 'react';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StoreIcon from '@material-ui/icons/Store';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}  >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start"  color="inherit" >
            <StoreIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Store Front
          </Typography>
          <IconButton color="inherit" style={{position:'absolute', right:'20px'}} onClick={()=>{props.show()}}>
          <StyledBadge badgeContent={props.cart.length} color="secondary">
          <ShoppingCartIcon />
          </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStateToProps(state){
  return {cart:state.cart};
}
export default connect(mapStateToProps)(Header);