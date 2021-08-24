import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoriesReducer from './reducers/categories';
import productsReducer  from './reducers/products';
import cartReducer from './reducers/cart';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const reducers = combineReducers ({
  categories : categoriesReducer,
  products : productsReducer,
  cart:cartReducer,

});

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
