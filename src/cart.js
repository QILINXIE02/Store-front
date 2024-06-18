const initialState = [];

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      if (payload.inStock !== 0) {
        return [...state, payload];
      } else {
        return state;
      }
    default:
      return state;
  }
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
}
