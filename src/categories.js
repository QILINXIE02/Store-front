const initialState = {
  categoriesList: [
    { name: 'Electronics', description: ': Summer limited-time sales' },
    { name: 'Food', description: ': Fresh farm deliveries to your doorsteps' }
  ],
  activeCategory: { name: 'Electronics', description: 'New arrivals' }
};

export default function categoriesReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case 'LOAD_PRODUCTS':
      // Assuming payload is an array of products with category information
      const categories = [...new Set(payload.map(product => product.category))]; // Extract unique categories from products
      return {
        ...state,
        categoriesList: categories.map(category => ({
          name: category,
          description: `Products in ${category}`
        })),
      };
    case 'CHANGE_ACTIVE':
      const changeActiveCategory = state.categoriesList.find(item => item.name === payload);
      return {
        ...state,
        activeCategory: changeActiveCategory || state.activeCategory
      };
    default:
      return state;
  }
}

export function changeActive(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  };
}
