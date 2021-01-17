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
import MicIcon from '@material-ui/icons/Mic';

const Layout = ({ children, cartItems, toggleListening }) => {
    return (
        <>
            <AppBar position='static'>
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
            {children}
            <Fab 
                color="primary" 
                style={{
                    position: "fixed",
                    bottom: 36,
                    right: 36,
                }}
                onClick={toggleListening}
            >
                <MicIcon />
            </Fab>
            <Cursor />
            <VoiceListener />
        </>
    );
}

const mapStateToProps = ({cart}) => {
    return {
        cartItems: cart.length,
    }
}

const mapDispatchToProps = { toggleListening };

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
