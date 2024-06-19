// src/cart.js

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if item already exists in cart
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (existingItem) {
        // If item exists, update quantity
        const updatedItems = state.cartItems.map(item =>
          item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cartItems: updatedItems,
        };
      } else {
        // If item does not exist, add it to cart
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      const { productId, quantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item._id === productId ? { ...item, quantity: quantity } : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
