import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, MenuIcon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';


const Layout = ({ children }) => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" aria-label="menu">
                    </IconButton>  
                    <Typography variant="h6">
                        Sam's School Supplies
                    </Typography>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    <Badge badgeContent={4} color="secondary">
                        <Button component={Link} to="/cart" color="inherit">Cart</Button>
                    </Badge>
                </Toolbar>
            </AppBar>
            {children}
        </>
    );
}

export default Layout;