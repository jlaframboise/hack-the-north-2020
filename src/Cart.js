import React from 'react';
import { connect } from 'react-redux'

import { ProductCard } from './Main.js'
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

const Cart = ({cart}) => {
    return (
        <Container>
            <Grid container spacing={3}>
                {cart.map(product => (
                    <Grid item md={4} style={{ paddingTop: 36 }}>
                        <ProductCard product={product} cart={true} />
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
  
// const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(Cart)