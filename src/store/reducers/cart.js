import { CART_ADD, CART_REMOVE } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    cart: [],
}

const cartAdd = (state, action) => {
    let cartCopy = [...state.cart];
    
    if(!cartCopy.find(o => o.id === action.data.id)) {
        cartCopy.push(action.data);
    };
    return updateObject(state, {
        cart: cartCopy,
    });
}

const cartRemove = (state, action) => {
    let cartCopy = [...state.cart];
    
    cartCopy = cartCopy.filter((o) => {
        return o.id !== action.data.id;
    });
    return updateObject(state, {
        cart: cartCopy,
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