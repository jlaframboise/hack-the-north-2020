import React from 'react';
import { connect } from 'react-redux';
import { toggleListening } from './store/actions/cart';
import { Link } from 'react-router-dom';
import Cursor from './Cursor';
import VoiceListener from './VoiceListener';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import MicIcon from '@material-ui/icons/Mic';

const Layout = ({ children, cartItems, bannerCart, listening, toggleListening }) => {
    return (
        <>
            <div className="banner-cart-list">
                {bannerCart.map(banner => (
                    <Paper className="banner-cart-item">
                        <div>Added {banner.name} to cart.</div>
                    </Paper>
                ))}
            </div>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="h6">
                        Sam's School Supplies
                    </Typography>
                    <div style={{marginLeft: "auto"}}>
                        <Button component={Link} to="/" color="inherit">Home</Button>
                        <Badge badgeContent={cartItems} color="secondary">
                            <Button component={Link} to="/cart" color="inherit">Cart</Button>
                        </Badge>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {children}
            <div style={{ position: "fixed", bottom: 36, right: 36, display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                {listening && <Fab style={{ marginBottom: 24 }} variant="extended" onClick={() => alert("Use hands and voice to control shop.")}>Active</Fab> }
                <Fab color="primary" onClick={toggleListening}>
                    <MicIcon />
                </Fab>
            </div>
            <Cursor />
            <VoiceListener />
        </>
    );
}

const mapStateToProps = ({listening, cart, bannerCart}) => {
    return {
        cartItems: cart.length,
        listening,
        bannerCart,
    }
}

const mapDispatchToProps = { toggleListening };

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
