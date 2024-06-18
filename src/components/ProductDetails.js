import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

function ProductDetails() {
  const { productId } = useParams();
  const product = useSelector(state =>
    state.products.products.find(item => item.id === Number(productId))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={`https://source.unsplash.com/random?${product.name}`}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="body1" component="p">
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" component="p">
          In Stock: {product.instock}
        </Typography>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductDetails;
