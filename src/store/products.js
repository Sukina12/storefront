const initialState = {
  products: [
    {
      name: 'Apple MacBook Air M1 2020',
      category: 'Electronics',
      price: 1100,
      count: 9,
      image:
        'https://www.cnet.com/a/img/B5kW64rloo2njA_BjSvzdzMkgss=/756x425/2021/06/06/8d01d6d2-09dc-483c-8e74-e03170195b0a/m1-mac-shankland.jpg',
    },
    {
      name: 'Dell XPS 13 2020',
      category: 'Electronics',
      price: 900,
      count: 21,
      image:
        'https://www.cnet.com/a/img/r6yc3lQrbGKW2tMKYjvMyk0LpAY=/756x425/2020/01/02/bdc0de74-4a23-4732-bf7b-41f4dcc6e90a/01-dell-xps-13.jpg',
    },
    {
      name: 'LG CX Series',
      category: 'Electronics',
      price: 1000,
      count: 16,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1608740307-a1ik70d2wfl-ac-sl1500-1608740286.jpg?crop=1.00xw:0.797xh;0,0.0937xh&resize=768:*',
    },
    {
      name: 'Samsung Smart TV',
      category: 'Electronics',
      price: 700,
      count: 25,
      image:
        'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua50tu8000uxtw-frontblack-229856395?$720_576_PNG$',
    },
    {
      name: 'Apple iPhone 11 Pro',
      category: 'Electronics',
      price: 800,
      count: 8,
      image:
        'https://i.guim.co.uk/img/media/fafda794e7f84de992bc9d36260da92150c4031c/373_518_4075_2445/master/4075.jpg?width=620&quality=85&auto=format&fit=max&s=2a1e90c78ba947283b9737eb6606ec7e',
    },
    {
      name: 'Samsung Galaxy S10',
      category: 'Electronics',
      price: 650,
      count: 12,
      image:
        'https://i.guim.co.uk/img/media/6ead18d1b23b6cdaa33f6731c0c417a8f0576552/539_452_3726_2236/master/3726.jpg?width=620&quality=85&auto=format&fit=max&s=548aaa2cbb4ce837508d757542e646f5',
    },
    {
      name: 'Single-Serve Pot Pies',
      category: 'Food',
      price: 6,
      count: 15,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/frozen-pot-pies.jpeg',
    },
    {
      name: 'Seafood-Flavored Cheese Snacks',
      category: 'Food',
      price: 12,
      count: 8,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/crab-cheese-balls.jpeg',
    },
    {
      name: 'Appetizer-Sized Pizzas',
      category: 'Food',
      price: 8,
      count: 11,
      image:
        'https://cdn.trendhunterstatic.com/phpthumbnails/326/326762/326762_1_800.jpeg',
    },
    {
      name: 'Prepackaged Deep-Fried Snack Cakes',
      category: 'Food',
      price: 6,
      count: 7,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/snack-cakes.jpeg',
    },
    {
      name: 'Cauliflour Rice Mixes',
      category: 'Food',
      price: 10,
      count: 16,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/riced-cauliflower.jpeg',
    },
    {
      name: 'Food Truck-Inspired Snacks',
      category: 'Food',
      price: 8,
      count: 11,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/hot-pockets.jpeg',
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let product= state.products.filter (product => 
         product.category === payload ? product.category : null
      );
      
      return { ...state, product : product };
    default :
      return state;
  }
};

export default productsReducer;
