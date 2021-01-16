import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, IconButton, MenuIcon } from '@material-ui/core';
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

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  console.log(products);

  return (
    <>
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
        </IconButton>  
        <Typography variant="h6">
        Sam's School Supplies
        </Typography>
        <Button color="inherit">Menu</Button>
      </Toolbar>

    </AppBar>

    <Container>
      
      <Grid container spacing={3}>
      {
        products.map((product) => (
          <Grid item md={4} style={{ paddingTop: 36 }}>
            <ProductCard product={product} />
          </Grid>
        ))
      }
      </Grid>
    </Container>
    </>
  );
}

const ProductCard = ({product}) => {
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
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default App;
