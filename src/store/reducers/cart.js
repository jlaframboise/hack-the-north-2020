import { CART_ADD, CART_REMOVE } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    cart: [
        {
            "name": "Paper",
            "price": 19.99,
            "description": "Money doesn't grow on trees, but paper kind of does!",
            "image": "https://cdn.pixabay.com/photo/2016/08/23/12/37/files-1614223_960_720.jpg"
        },
        {
            "name": "Laptop",
            "price": 200.00,
            "description": "The fastest laptop money can buy! Coffee not included.",
            "image": "https://cdn.pixabay.com/photo/2014/05/02/21/47/laptop-336369__340.jpg"
        },
    ],
}

const cartAdd = (state, action) => {
    console.log(action);
    return updateObject(state, {
        cart: [],
    });
}

const cartRemove = (state, action) => {
    return updateObject(state, {
        cart: [],
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD:
            return cartAdd(state, action);
        case CART_REMOVE:
            return cartRemove(state, action);
        default:
            return state;
    }
}

export default reducer;