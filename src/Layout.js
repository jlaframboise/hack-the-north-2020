import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';


const Layout = ({ children, cartItems }) => {
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
            <Fab color="primary" style={{
                position: "fixed",
                bottom: 36,
                right: 36,
            }}>
                <MicIcon />
            </Fab>
        </>
    );
}

const mapStateToProps = ({cart}) => {
    return {
        cartItems: cart.length,
    }
}

export default connect(mapStateToProps)(Layout);
