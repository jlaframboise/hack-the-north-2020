import React, { useEffect } from 'react';
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

// Inside your app
// import Handsfree from 'handsfree';

// const handsfree = new Handsfree({hands: true})
// handsfree.enablePlugins('browsing')
// handsfree.start()
    

const HandsPage = () => {
    useEffect(() => {
        const handsfree = new window.Handsfree({hands: true, showDebug: true });
        console.log(handsfree);

        // handsfree.enablePlugins('browsing')
        handsfree.start()
    }, []);

    return (
        <Container>
            <Typography variant="h1">
                Hand tracking page
            </Typography>
        </Container>

    );
};

export default HandsPage;