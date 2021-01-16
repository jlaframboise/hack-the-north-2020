import React from 'react';
import { connect } from 'react-redux';
import { cartRemove } from './store/actions/cart';

import { ProductCard } from './Main.js'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Cart = ({cart, cartRemove}) => {
    return (
        <Container>
            <Grid container spacing={3}>
                {cart.map(product => (
                    <Grid item md={4} style={{ paddingTop: 36 }}>
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