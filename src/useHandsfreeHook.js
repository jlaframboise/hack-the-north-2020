import { useState, useEffect } from "react";

import { getHandCenter, camRatioToScreenPixels } from './util_functions'

const initialPosition = {x: -10, y: -10};

const useHandsfreeHook = () => {
    const [active, setActive] = useState(false);
    const [started, setStarted] = useState(false);
    const [handsfree, setHandsfree] = useState(null);
    const [position, setPosition] = useState(initialPosition);

    useEffect(() => {
        const hf = new window.Handsfree({hands: true, showDebug: true });

        hf.plugin.pinchScroll.enable();
        hf.plugin.pinchScroll.config.speed = 2;

        hf.use('hands-event', (data) => {
            // I like to always bail if there's no data,
            // which might happen if you swap out hands for the face later on
            if (!data.hands) return;
            
            // Log the data
            if (data.hands.multiHandLandmarks) {
                let [[left_x_avg, left_y_avg], [right_x_avg, right_y_avg]] = getHandCenter(data.hands);
                
                if (left_x_avg && left_y_avg) {
                    let [x, y] = camRatioToScreenPixels(left_x_avg, left_y_avg);
                    setPosition({x, y});
                }
            }
        });

        setHandsfree(hf);
    }, []);

    useEffect(() => {
        console.log("UPDATE HANDSFREE");
        if (handsfree !== null) {
            if (active) {
                if (started) {
                    handsfree.showDebugger();
                    handsfree.unpause();

                } else {
                    handsfree.start();
                    setStarted(true);
                }                
            } else {
                handsfree.pause();
                handsfree.hideDebugger();
                setPosition(initialPosition);
            }
        }
    }, [active]);

    return [position, setActive];
}

export default useHandsfreeHook;