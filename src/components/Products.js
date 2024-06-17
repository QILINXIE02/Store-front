import React from 'react'
import {connect} from 'react-redux';
import {getCategoryItems} from '../products';
import { addToCart } from '../cart';
import {reduceInventory} from '../products';

import { CardActionArea,CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    function handleClick(element){
        props.addToCart(element);
        props.reduceInventory(element);
        props.getCategoryItems(props.category.name);
        enqueueSnackbar('added to cart ');
    }

    return (
        <div>
            {props.products.activeProducts.map(element=>{
            return <Card elevation={3} className={classes.root} style={{display:"inline-block",marginLeft:'30px',marginTop:'30px', width:'18%',borderRadius:'10px', backgroundColor:'white'}}>
                  <CardMedia 
                    className={classes.media}
                    image={`https://source.unsplash.com/random?${element.name}`}
                    title="Contemplative Reptile"
                />
                 <CardActionArea>
                <CardContent >
                    <Typography  gutterBottom variant="h5" component="h2">
                        {element.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                    price: {element.price} $
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    quantity: {element.inStock}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                        <Button size="small" color="primary" onClick={()=>{handleClick(element) }}>
                            Add To Cart
                        </Button>
                    </CardActions>
            </Card>

            })}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        category:state.categoriesList.activeCategory,
        products: state.products,
        cartProducts: state.cart
    };
}
const mapDispatchToProps = {
    getCategoryItems,
    addToCart,
    reduceInventory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)