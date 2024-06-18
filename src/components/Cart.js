import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Cart(props) {
  const classes = useStyles();

  function handleList() {
    let temp = [];
    props.cart.forEach((element) => {
      const existingElement = temp.find(item => item.name === element.name);
      if (existingElement) {
        existingElement.inCart += 1;
      } else {
        element.inCart = 1;
        temp.push(element);
      }
    });
    return temp.map(element => (
      <ListItem key={element.name}>
        <ListItemText
          style={{ backgroundColor: 'rgb(209, 224, 224)', borderRadius: '12px' }}
          primary={`${element.name} : ${element.inCart}`}
        />
      </ListItem>
    ));
  }

  return (
    <div
      className={classes.root}
      style={{ float: 'right', width: '15%', marginTop: '15px', marginRight: '20px', borderRadius: '5px', border: '2px solid rgb(204,204,204)', boxShadow: '8px 8px 2px 1px rgba(0, 0, 255, .2)' }}
    >
      <List component="nav" aria-label="secondary mailbox folders">
        <h3 style={{ color: 'rgb(0, 112, 153)', marginLeft: '5px' }}>Purchases:</h3>
        {handleList()}
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Cart);
