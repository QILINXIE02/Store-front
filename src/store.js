import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";

const reducers = combineReducers({
  categoriesList: categoryReducer,
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
