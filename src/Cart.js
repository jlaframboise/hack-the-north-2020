import React from 'react';
import { connect } from 'react-redux';
import { cartRemove } from './store/actions/cart';

import { ProductCard } from './Main.js'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Cart = ({cart, cartRemove}) => {
    return (
        <Container>
            <Grid container spacing={3}>
                {cart.length === 0 &&
                    <Typography variant="h4" style={{marginTop: 48}}>Currently no items in cart. Go back to home to add items to cart.</Typography>
                }
                {cart.map(product => (
                    <Grid item md={4} style={{ paddingTop: 36 }} key={product.id}>
                        <ProductCard product={product} cart={true} handleCart={cartRemove} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

const mapStateToProps = ({cart}) => {
    return {
        cart,
    }
}
  
const mapDispatchToProps = { cartRemove };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);