const initialState = {
  categories: [
    {
      name: 'Food',
      displayName: 'Food',
      description: 'Food description',
      url: 'https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=6&m=1220017909&s=170667a&w=0&h=Zy_NqTbEluSW0T667IHW7DVlpQih70V45k-rgeFt6Oo=',
    },
    {
      name: 'Electronics',
      displayName: 'Electronics',
      description: 'Electronics description',
      url: 'https://www.guardianstorage.com/wp-content/uploads/2013/02/old-tech.jpg',
    },
  ],
  active: '',
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      const categories = state.categories;
      const active = payload;
      return { categories, active };
    default :
      return state;
  }
};

export default categoriesReducer;
