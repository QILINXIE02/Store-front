const initialState = [];

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      // Check if item already exists in cart
      const existingItem = state.find((item) => item.name === payload.name);
      if (existingItem) {
        // If exists, increase quantity
        return state.map((item) =>
          item.name === payload.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If not, add new item with quantity 1
        return [...state, { ...payload, quantity: 1 }];
      }
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.name !== payload.name);
    default:
      return state;
  }
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
}

export function removeFromCart(name) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: name,
  };
}
