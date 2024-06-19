// src/thunk.js

export const getRemoteData = () => {
  return async (dispatch) => {
    try {
      const raw = await fetch(process.env.REACT_APP_API_URL);
      if (!raw.ok) {
        throw new Error('Failed to fetch data from server');
      }
      const results = await raw.json();
      dispatch(loadProducts(results.results));
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error or dispatch an action to notify user
    }
  };
};

export const loadProducts = (payload) => {
  return {
    type: 'LOAD_PRODUCTS',
    payload,
  };
};

export const updateProductInventory = (product) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error('Failed to update product inventory');
      }
      // Optionally dispatch an action to update local state
    } catch (error) {
      console.error('Error updating product inventory:', error);
      // Handle error or dispatch an action to notify user
    }
  };
};
