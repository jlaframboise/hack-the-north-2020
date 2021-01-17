import { CART_ADD, CART_REMOVE, TOGGLE_LISTENING, BANNER_CART_ADD, BANNER_CART_REMOVE } from '../actions/actionTypes';

export const cartAdd = data => {
	return {
		type: CART_ADD,
		data
	};
};

export const cartRemove = data => {
	return {
		type: CART_REMOVE,
		data
	};
};

export const toggleListening = () => {
	return {
		type: TOGGLE_LISTENING,
	};
};

export const bannerCartAdd = data => {
	return {
		type: BANNER_CART_ADD,
		data
	};
}

export const bannerCartRemove = data => {
	return {
		type: BANNER_CART_REMOVE,
		data
	};
}

export const addCartItem = data => {
	return dispatch => {
		dispatch(cartAdd(data));
		dispatch(bannerCartAdd(data));
		setTimeout(() => {
			dispatch(bannerCartRemove(data));
		}, 3000);
	}
}