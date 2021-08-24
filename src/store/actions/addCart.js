export const addCart= product => {
    return {
      type : 'ADD',
      payload: product,
    };
  };