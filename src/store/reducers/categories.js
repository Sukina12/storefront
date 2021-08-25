const initialState = {
  categories: [
    {
      name: 'food',
      displayName: 'Food',
      description: 'Food description',
      url: 'https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=6&m=1220017909&s=170667a&w=0&h=Zy_NqTbEluSW0T667IHW7DVlpQih70V45k-rgeFt6Oo=',
    },
    {
      name: 'electronics',
      displayName: 'Electronics',
      description: 'Electronics description',
      url: 'https://www.guardianstorage.com/wp-content/uploads/2013/02/old-tech.jpg',
    },
    {
      name: 'clothing',
      displayName: 'Clothing',
      description: 'Clothing description',
      url: 'https://cdn.shopify.com/s/files/1/0282/5050/5250/files/TOAST_WEB_Shops_Edinburgh.jpg?v=1611058448',
    },

  ],
  active: '',
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      // const categories = state.categories;
      state.active = payload;
      return state;
    case 'GET_C':
      return {...state,categories:payload.categories}
    default :
      return state;
  }
};

export default categoriesReducer;
