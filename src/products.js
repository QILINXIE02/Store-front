const initialState = {
    products: [],
    activeProducts: []
  };
  
  export default function productsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'CHANGE_ACTIVE':
        const changeActive = state.products.filter(item => item.category === payload);
        return {
          products: state.products,
          activeProducts: changeActive
        };
      case 'DECREASE_INVENTORY':
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
          products: afterAdd,
          activeProducts: state.activeProducts
        };
      case 'LOAD_PRODUCTS':
        return {
          products: payload,
          activeProducts: state.activeProducts,
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
  
  export function reduceInventory(product) {
    return {
      type: 'DECREASE_INVENTORY',
      payload: product
    };
  }
  