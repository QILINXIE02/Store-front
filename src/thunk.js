export const getRemoteData = () => {
  return async (dispatch) => {
      const raw = await fetch(process.env.REACT_APP_API_URL);
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
