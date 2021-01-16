import { CART_ADD, CART_REMOVE } from '../actions/actionTypes';

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