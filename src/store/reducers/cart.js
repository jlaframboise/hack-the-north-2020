import { CART_ADD, CART_REMOVE, TOGGLE_LISTENING, BANNER_CART_ADD, BANNER_CART_REMOVE } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    cart: [],
    listening: false,
    bannerCart: [],
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

const toggleListening = (state) => {
    let current = state.listening;
    return updateObject(state, {
        listening: !current,
    });
}

const bannerCartAdd = (state, action) => {
    let cartCopy = [...state.bannerCart];
    
    if(!cartCopy.find(o => o.id === action.data.id)) {
        cartCopy.push(action.data);
    };
    return updateObject(state, {
        bannerCart: cartCopy,
    });
}

const bannerCartRemove = (state, action) => {
    let cartCopy = [...state.bannerCart];
    
    cartCopy = cartCopy.filter((o) => {
        return o.id !== action.data.id;
    });
    return updateObject(state, {
        bannerCart: cartCopy,
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD:
            return cartAdd(state, action);
        case CART_REMOVE:
            return cartRemove(state, action);
        case TOGGLE_LISTENING:
            return toggleListening(state);
        case BANNER_CART_ADD:
            return bannerCartAdd(state, action);
        case BANNER_CART_REMOVE:
            return bannerCartRemove(state, action);
        default:
            return state;
    }
}

export default reducer;