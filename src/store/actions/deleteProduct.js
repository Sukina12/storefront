export const deleteProduct = product => {
  return {
    type : 'DELETE',
    payload: product,
  };
};
