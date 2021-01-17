import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { cartAdd } from './store/actions/cart';
import './App.css';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import PRODUCTS from './api.json';

const ProductPage = ({ cartAdd }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  return (
    <>
    <Container>
        <Grid container spacing={3}>
        {
          products.map((product) => (
            <Grid item md={4} key={product.id} style={{ paddingTop: 36 }}>
              <ProductCard product={product} handleCart={cartAdd} />
            </Grid>
          ))
        }
        </Grid>
      </Container>
    </>
  );
}

export const ProductCard = ({product, cart = false, handleCart}) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <CardMedia
            //className={classes.media}
            style={{ height: 140 }}
            image={product.image}
            title={product.name}
          />
          <Typography gutterBottom variant="h6" component="h2">
            $ {product.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleCart(product)}>
          {cart ? "Remove from cart" : "Add to cart"}
        </Button>
        
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = { cartAdd };
  
export default connect(null, mapDispatchToProps)(ProductPage);
