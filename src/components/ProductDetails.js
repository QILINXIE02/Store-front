import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate(); // Use navigate for navigation
  const product = useSelector(state =>
    state.products.activeProducts.find(item => item.id === Number(productId))
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
          Description: {product.description}
        </Typography>
        <Typography variant="body1" component="p">
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" component="p">
          In Stock: {product.inStock}
        </Typography>
        <Button size="small" color="primary" onClick={() => navigate('/')}>
          Back to Products
        </Button>
        <Typography variant="h6" component="h4" style={{ marginTop: '20px' }}>
          Related Items
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Suggestion 1
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Suggestion 2
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Suggestion 3
        </Typography>
        <Typography variant="h6" component="h4" style={{ marginTop: '20px' }}>
          Product Details
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Product Specs.
        </Typography>
        <Typography variant="h6" component="h4" style={{ marginTop: '20px' }}>
          User Reviews
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          User reviews here.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductDetails;
