// src/cartReducer.js

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (existingItem) {
        const updatedItems = state.cartItems.map(item =>
          item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cartItems: updatedItems,
        };
      } else {
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
      const updatedCartItems = state.cartItems.map(item =>
        item._id === productId ? { ...item, quantity: quantity } : item
      );
      if (quantity <= 0) {
        return {
          ...state,
          cartItems: updatedCartItems.filter(item => item._id !== productId),
        };
      } else {
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
