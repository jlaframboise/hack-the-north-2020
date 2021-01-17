import React, { useState, useEffect } from 'react';
import { ProductCard } from './Main.js'
// import { useMousePosition } from "./useMousePosition"

import { arrayMean, getHandCenter, camRatioToScreenPixels } from './util_functions'

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
// import Marker

// Inside your app
// import Handsfree from 'handsfree';

// const handsfree = new Handsfree({hands: true})
// handsfree.enablePlugins('browsing')
// handsfree.start()



const HandsPage = () => {
    const [position, setPosition] = useState({top: 0, left: 0});

    useEffect(() => {
        const handsfree = new window.Handsfree({hands: true, showDebug: true });
        console.log(handsfree);

        // handsfree.enablePlugins('browsing')
        // handsfree.start();

        handsfree.plugin.pinchScroll.enable();
        handsfree.plugin.pinchScroll.config.speed = 2;
        
        let lastPoint = 0;
        handsfree.use('logger', (data) => {
            // I like to always bail if there's no data,
            // which might happen if you swap out hands for the face later on
            if (!data.hands) return
            
            // Log the data
            if (data.hands.multiHandLandmarks) {
                let currentPoint = data.hands.multiHandLandmarks[0][0].x;
                // console.log(currentPoint, lastPoint);
                lastPoint = currentPoint;

                let [[left_x_avg, left_y_avg], [right_x_avg, right_y_avg]] = getHandCenter(data.hands);




                // console.log(pointer);
                
                if (left_x_avg && left_y_avg) {
                    // pointer.style.left = left_x_avg*200;
                    // pointer.style.top = left_y_avg*200;
                    let [x, y] = camRatioToScreenPixels(left_x_avg, left_y_avg);
                    setPosition({left: x, top: y});
                }
            }

            
            // Do something if we are pinching with left [0] pinky [3]
            // if (data.hands.pinchState[0][3] === 'held') {
            //   console.log('pinching with left pinky')
            // }
        });
    }, []);

    useEffect(() => {
        window.addEventListener("onkeydown", e => {
            console.log(e);
            if (e.isComposing || e.keyCode === 229) {
                return;
            }
            const pointer = document.getElementById("pointer");
            const {x, y} = pointer.getBoundingClientRect();
            console.log("CLICK");
            console.log(document.elementFromPoint(x, y));
            document.elementFromPoint(x, y).click();
        })
    });


    return (
        <Container>
            <Button onClick={() => alert("CLICKED!")}>
                <Typography variant="h1">
                    Hand tracking page
                </Typography>
            </Button>
            <p style={{marginTop: 100}}>Hello world</p>
            <p style={{marginTop: 100}}>Hello world</p>
            <p style={{marginTop: 100}}>Hello world</p>
            <p style={{marginTop: 100}}>Hello world</p>
            <p style={{marginTop: 100}}>Hello world</p>
            <p style={{marginTop: 100}}>Hello world</p>
            <p style={{marginTop: 100}}>Hello world</p>
        </Container>

    );
};

export default HandsPage;