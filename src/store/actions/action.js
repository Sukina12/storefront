export const getData = ()=>{
  return async (dispatch,getState) =>{
    // const state = getState();
    const raw = await fetch ('https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa');
    const results = await raw.json();
    dispatch(getProducts(results.products));
  } ;
};

export const getProducts = (products) =>{
  return {
    type:'GET',
    payload:products,
  };
};
