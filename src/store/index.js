import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories';
import productsReducer  from './products';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers ({
  categories : categoriesReducer,
  products : productsReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
