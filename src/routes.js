import React from "react";
import { Route, Switch } from "react-router-dom";

import ProductPage from './Main';
import Cart from './Cart';
// import HandsPage from './HandsPage'

const Router = () => {
	return (
        <Switch>
            <Route path="/cart" component={Cart} />
            {/* <Route path="/handstrack" component={HandsPage} /> */}
            <Route exact path="/" component={ProductPage} />
        </Switch>
	);
}

export default Router;