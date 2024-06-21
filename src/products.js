const initialState = {
  products: [], // Initial list of all products
  activeProducts: [], // Products filtered based on active category
};

export default function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_ACTIVE':
      // Filter products based on the selected category
      const changeActive = state.products.filter(item => item.category === payload);
      return {
        ...state,
        activeProducts: changeActive
      };
    case 'LOAD_PRODUCTS':
      // Load all products into state
      return {
        ...state,
        products: payload
      };
    case 'DECREASE_INVENTORY':
      // Decrease inventory of a product
      const afterAdd = state.products.map(element => {
        if (element.name === payload.name && element.inStock > 0) {
          element.inStock = element.inStock - 1;
        }
        if (element.inventoryCount === 0) {
          element.description = 'sold';
        }
        return element;
      });
      return {
        ...state,
        products: afterAdd
      };
    default:
      return state;
  }
}

export function getCategoryItems(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  };
}

export function loadProducts(payload) {
  return {
    type: 'LOAD_PRODUCTS',
    payload,
  };
}

export function reduceInventory(product) {
  return {
    type: 'DECREASE_INVENTORY',
    payload: product
  };
}
