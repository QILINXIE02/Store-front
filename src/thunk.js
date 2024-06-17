
export const getRemoteData = () => {
    return async (dispatch) => {
        const raw = await fetch('https://api-js401.herokuapp.com/api/v1/products');
        const results = await raw.json();
      dispatch(loadProducts(results.results));
    };
  };

  export const loadProducts = (payload) => {
    return {
      type: 'LOAD_PRODUCTS',
      payload,
    };
  };