# HoverFlow Navigation
A method of human computer interaction (HCI) invovling a combination of gesture based navigation and
voice commands to allow the user to explore an e-commerce site in an intuitive way. 

![HoverFlow Navigation in action!](/img/Screenshot%202021-01-17%20034321.png)


## Goal of this work
To demonstrate the potential of this system of HCI for an ecommerce site to allow users to interact with products with ease. 

## Libraries
We used Handsfree.js for 21-point hand tracking, see [Handsfree Js](https://handsfree.js.org/) for more information. 

We used [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) for the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).

We used [React](https://reactjs.org/) and [Material-UI](https://material-ui.com/) to build our responsive sample e commerce shop.


## How to Use the App
Hosted with Heroku at [HoverFlow](https://hoverflow.herokuapp.com/)

Navigate the e commerce site using standard mouse controls or click the mircophone icon button to open a new way to explore the shop.

Shop features include
- Add and remove items from cart
- View cart items
- Responsive layout

The app asks for user permission to use microphone and video webcamera.

Opens video feed tracking hand movements to interact with the app.
- Cursor will follow the position of hand on the screen
- Pinch thumb and index finger to scroll the page

Creates a Speech Recognition stream to identify voice commands
- 'Activate' command to click element beneath motion cursor
- 'Go to home' command to go to the home page
- 'Go to cart' command to go to cart view


## Gallery

![Products Page](/img/Screenshot%202021-01-17%20034035.png)

![A Shopping Cart](/img/Screenshot%202021-01-17%20034125.png)

![Handsfree Js Detection](/img/Screenshot%202021-01-17%20034215.png)


## Development Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
