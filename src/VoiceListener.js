import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Container from '@material-ui/core/Container';

const VoiceListener = ({ listening }) => {    
    const history = useHistory();
    // this will run if state is updated
    useEffect(() => {
        if(listening) {
            SpeechRecognition.startListening({continuous:true});
        } else {
            SpeechRecognition.stopListening();
        }
    }, [listening]); // the list here is a dependancy array to only run if needed info is updated
    
    const commands = [
        {
            command: '*activate*',
            callback: () => {
                console.log("CLICK");
                const pointer = document.getElementById("pointer");
                const {x, y} = pointer.getBoundingClientRect();
                document.elementFromPoint(x, y).click();
            },
        },
        {
            command: '*go to cart*',
            callback: () => {
                console.log("I heard you want to go to cart!");
                history.push("/cart");
                
            },
        },
        {
            command: '*go to home*',
            callback: () => {
                console.log("I heard you want to go to home!");
                history.push("/")
                
            },
        }
    ]

    const { transcript, resetTranscript } = useSpeechRecognition({commands});
    
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    return (
        null
        // <Container>
        //     {/* <Button onClick= {()=> SpeechRecognition.startListening({continuous:true})}>Start</Button>
        //     <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
        //     <Button onClick={resetTranscript}>Reset</Button> */}
        //     {/* <p>{transcript}</p> */}

        // </Container>
        
    )


}

// deconstruct state, then assemble props, then above destruct props again
const mapStateToProps = ({ listening }) => {
    return {
        listening,
    }
}

// connect the mapToStateProps to voice listener
export default connect(mapStateToProps)(VoiceListener);