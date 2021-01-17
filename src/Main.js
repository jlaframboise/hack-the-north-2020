import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addCartItem } from './store/actions/cart';
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

const url = "https://dropbase-export.s3.amazonaws.com/Ld3ZZthUG2hkcFJLgsvL2W.json";
const api_options = {
  method: 'GET',
  mode: 'no-cors'
};


const ProductPage = ({ addCartItem }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(PRODUCTS);
    // axios.get(url)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // var oReq = new XMLHttpRequest();
    // oReq.open("GET", "/myfile.png", true);
    // oReq.responseType = "blob";

    // oReq.onload = function(oEvent) {
    //   var blob = oReq.response;
    //   console.log(blob.text())

    //   const reader = new FileReader();
    //   reader.addEventListener('loadend', ()=>{
    //     console.log(reader.result)
    //   })
    //   // ...
    // };

    // oReq.send();

  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={3}>
        {
          products.map((product) => (
            <Grid item md={4} key={product.id} style={{ paddingTop: 36 }}>
              <ProductCard product={product} handleCart={addCartItem} />
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
        <Button size="small" color="primary" onClick={() => handleCart(product)} style={{ width: "100%", height: 48 }}>
          {cart ? "Remove from cart" : "Add to cart"}
        </Button>
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = { addCartItem };
  
export default connect(null, mapDispatchToProps)(ProductPage);
