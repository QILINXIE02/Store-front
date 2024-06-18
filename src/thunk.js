
export const getRemoteData = () => {
    return async (dispatch) => {
        const raw = await fetch('https://auth-api-1-8tur.onrender.com/api/v1/store');
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