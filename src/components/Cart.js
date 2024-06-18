// src/components/Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { updateQuantity, removeFromCart } from '../cartActions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        float: 'right',
        marginTop: '15px',
        marginRight: '20px',
        borderRadius: '5px',
        border: '2px solid rgb(204,204,204)',
        boxShadow: '8px 8px 2px 1px rgba(0, 0, 255, .2)'
    },
    quantityInput: {
        width: '50px',
        textAlign: 'center',
    },
}));

function Cart(props) {
    const classes = useStyles();

    const handleQuantityChange = (item, newQuantity) => {
        props.updateQuantity(item, newQuantity);
    }

    const handleRemoveItem = (item) => {
        props.removeFromCart(item);
    }

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders">
                <Typography variant="h6" style={{ color: 'rgb(0, 112, 153)', marginLeft: '5px' }}>
                    Purchases:
                </Typography>
                {props.cart.map(item => (
                    <ListItem key={item.name}>
                        <ListItemText
                            style={{ backgroundColor: 'rgb(209, 224, 224)', borderRadius: '12px' }}
                            primary={`${item.name} : ${item.quantity}`} // Adjust as per your data structure
                        />
                        <TextField
                            className={classes.quantityInput}
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                            inputProps={{
                                min: 1,
                                max: item.inStock,
                            }}
                        />
                        <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(item)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

function mapStateToProps(state) {
    return { cart: state.cart };
}

const mapDispatchToProps = {
    updateQuantity,
    removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
