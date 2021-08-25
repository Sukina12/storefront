import superagent  from 'superagent';
import {addCart} from './addCart';
import {deleteProduct} from './deleteProduct'
const API = 'https://api-js401.herokuapp.com/api/v1';

export const getData = ()=>{
  return async (dispatch) =>{
    return superagent.get(`${API}/products`).then((response)=>{
      console.log(response);
      dispatch(getProducts({products:response.body.results}));
    });
  } ;
};

export const getData2 = ()=>{
  return (dispatch) => {
    return superagent.get(`${API}/categories`).then((response)=>{
      dispatch(getCategories({categories:response.body.results}));
    });
  };
};

export const getProducts = (products) =>{
  return {
    type:'GET_P',
    payload:products,
  };
};

export const getCategories = (categories) =>{
  return {
    type :'GET_C',
    payload : categories,
  }
}

export const updateData = (product) => {
  return (dispatch) => {
    return superagent.put(`${API}/products/${product._id}`).send({inStock : product.inStock-1}).then(()=>{
      dispatch (addCart(product));
    });
  };
};

export const updateData1 = (product) => {
  return (dispatch) => {
    return superagent.put(`${API}/products/${product._id}`).send({inStock : product.inStock+1}).then(()=>{
      dispatch (deleteProduct(product));
    });
  };
};


