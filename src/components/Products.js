// src/components/Products.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategoryItems, loadProducts } from '../products';
import { addToCart } from '../cartActions';
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

function Products({ category, products, getCategoryItems, addToCart, reduceInventory }) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        getCategoryItems(category.name); // Fetch products for the current category
    }, [category.name, getCategoryItems]); // Only re-run effect if category.name or getCategoryItems change

    function handleClick(element) {
        addToCart(element); // Dispatch addToCart action
        reduceInventory(element); // Dispatch reduceInventory action
        enqueueSnackbar('Added to cart');
    }

    return (
        <div>
            {products.activeProducts.map(element => (
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
