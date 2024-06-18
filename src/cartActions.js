
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action creators
export const updateQuantity = (item, newQuantity) => ({
    type: UPDATE_QUANTITY,
    payload: { item, newQuantity },
});

export const removeFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    payload: { item },
});

export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});