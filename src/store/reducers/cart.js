const initialState = { cart: [], show: false, num: 0 };

const cartReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      if (!state.cart.length) {
        payload['item'] = 1;
        state.num += 1;
        state.cart.push(payload);
        return { ...state };
      } else {
        let flag = false;
        for (let i = 0; i < state.cart.length; i++) {
          if (payload.id === state.cart[i].id) {
            state.num += 1;
            state.cart[i].item += 1;
            flag = true;
          }
        }
        if (!flag) {
          payload['item'] = 1;
          state.num += 1;
          state.cart.push(payload);
        }
        return { ...state };
      }
    case 'DELETE':
      let flag = false;
      for (let i = 0; i < state.cart.length; i++) {
        if (payload.id === state.cart[i].id) {
          if (state.cart[i].item > 1 && state.num > 0) {
            state.num -= 1;
            state.cart[i].item -= 1;
            flag = true;
            
          } else if (state.cart[i].item === 1 && !flag ) {
            const deletedProduct = state.cart.filter(product => {
              
                return product.name !== payload.name;
              });
              return { cart: [...deletedProduct], show: true };
          }

        }
      }
      return { ...state }
    default:
      return state;

  }
};
export default cartReducer;
