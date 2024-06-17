import React from 'react';
import { connect } from 'react-redux';
import { getCategoryItems } from '../products';
import { addToCart } from '../cart';
import { reduceInventory } from '../products';

import { CardActionArea, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Products(props) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    function handleClick(element) {
        props.addToCart(element);
        props.reduceInventory(element);
        props.getCategoryItems(props.category.name);
        enqueueSnackbar('Added to cart');
    }

    return (
        <div>
            {props.products.activeProducts.map(element => (
                <Card 
                    key={element.name} 
                    elevation={3} 
                    className={classes.root} 
                    style={{
                        display: "inline-block",
                        marginLeft: '30px',
                        marginTop: '30px',
                        width: '18%',
                        borderRadius: '10px',
                        backgroundColor: 'white'
                    }}
                >
                    <CardMedia
                        className={classes.media}
                        image={`https://source.unsplash.com/random?${element.name}`}
                        title={element.name}
                    />
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {element.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                Price: ${element.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Quantity: {element.inStock}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => handleClick(element)}>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        category: state.categoriesList.activeCategory,
        products: state.products,
        cartProducts: state.cart,
    };
}

const mapDispatchToProps = {
    getCategoryItems,
    addToCart,
    reduceInventory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
