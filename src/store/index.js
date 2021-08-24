import { createStore, combineReducers } from 'redux';
import categoriesReducer from './reducers/categories';
import productsReducer  from './reducers/products';
import cartReducer from './reducers/cart';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers ({
  categories : categoriesReducer,
  products : productsReducer,
  cart:cartReducer,

});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
