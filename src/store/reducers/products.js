// import { getProducts } from "../actions/action";

const initialState = {
  products: [
    {
      id:1,
      name: 'Apple MacBook Air M1 2020',
      category: 'Electronics',
      description:'Apple MackBook Description',
      price: 1100,
      count: 9,
      image:
        'https://www.cnet.com/a/img/B5kW64rloo2njA_BjSvzdzMkgss=/756x425/2021/06/06/8d01d6d2-09dc-483c-8e74-e03170195b0a/m1-mac-shankland.jpg',
    },
    {
      id:2,
      name: 'Dell XPS 13 2020',
      category: 'Electronics',
      description:'Dell XPS Description',
      price: 900,
      count: 21,
      image:
        'https://www.cnet.com/a/img/r6yc3lQrbGKW2tMKYjvMyk0LpAY=/756x425/2020/01/02/bdc0de74-4a23-4732-bf7b-41f4dcc6e90a/01-dell-xps-13.jpg',
    },
    {
      id:3,
      name: 'LG CX Series',
      category: 'Electronics',
      description:'LG CX Series Description',
      price: 1000,
      count: 16,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1608740307-a1ik70d2wfl-ac-sl1500-1608740286.jpg?crop=1.00xw:0.797xh;0,0.0937xh&resize=768:*',
    },
    {
      id:4,
      name: 'Samsung Smart TV',
      category: 'Electronics',
      description:'Samsung Smart TV Description',
      price: 700,
      count: 25,
      image:
        'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua50tu8000uxtw-frontblack-229856395?$720_576_PNG$',
    },
    {
      id:5,
      name: 'Apple iPhone 11 Pro',
      category: 'Electronics',
      description:'Apple iPhone 11 Description',
      price: 800,
      count: 8,
      image:
        'https://i.guim.co.uk/img/media/fafda794e7f84de992bc9d36260da92150c4031c/373_518_4075_2445/master/4075.jpg?width=620&quality=85&auto=format&fit=max&s=2a1e90c78ba947283b9737eb6606ec7e',
    },
    {
      id:6,
      name: 'Samsung Galaxy S10',
      category: 'Electronics',
      description:'Samsung Galaxy S10 Description',
      price: 650,
      count: 12,
      image:
        'https://i.guim.co.uk/img/media/6ead18d1b23b6cdaa33f6731c0c417a8f0576552/539_452_3726_2236/master/3726.jpg?width=620&quality=85&auto=format&fit=max&s=548aaa2cbb4ce837508d757542e646f5',
    },
    {
      id:7,
      name: 'Single-Serve Pot Pies',
      category: 'Food',
      description:'  Single-Serve Pot Pies Description',
      price: 6,
      count: 15,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/frozen-pot-pies.jpeg',
    },
    {
      id:8,
      name: 'Seafood-Flavored Cheese Snacks',
      category: 'Food',
      description:'Seafood-Flavored Cheese Snacks Description',
      price: 12,
      count: 8,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/crab-cheese-balls.jpeg',
    },
    {
      id:9,
      name: 'Appetizer-Sized Pizzas',
      category: 'Food',
      description:'Appetizer-Sized Pizzas Description',
      price: 8,
      count: 11,
      image:
        'https://cdn.trendhunterstatic.com/phpthumbnails/326/326762/326762_1_800.jpeg',
    },
    {
      id:10,
      name: 'Prepackaged Deep-Fried Snack Cakes',
      category: 'Food',
      description:'Prepackaged Deep-Fried Snack Cakes Description',
      price: 6,
      count: 7,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/snack-cakes.jpeg',
    },
    {
      id:11,
      name: 'Cauliflour Rice Mixes',
      category: 'Food',
      description:'Cauliflour Rice Mixes Description',
      price: 10,
      count: 16,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/riced-cauliflower.jpeg',
    },
    {
      id:12,
      name: 'Food Truck-Inspired Snacks',
      category: 'Food',
      description:'Food Truck-Inspired Snacks Description',
      price: 8,
      count: 11,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/hot-pockets.jpeg',
    },
  ],
  activeProducts:[],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      state.activeProducts= state.products.filter (product => 
         product.category === payload 
      );
      
      return { ...state, activeProducts : state.activeProducts };

    case 'ADD':
      state.activeProducts=state.activeProducts.map ((product) => {
        if(product.name === payload.name){
          if(product.inStock >0){
            product.inStock = product.inStock -1;

          } else{
        return product;
          }
            
          }
          return product;
        
          
      });
      console.log(state.activeProducts);
      return {...state, ...state.activeProducts};

    case 'DELETE':
      state.activeProducts=state.activeProducts.map ((product) => {
        if(product.name === payload.name){
          if(product.inStock >0){
            product.inStock = product.inStock +1;

          } else{
        return product;
          }
            
          }
          return product;
        });
          return {...state, ...state.activeProducts};
    case'GET_P':
      console.log('payload',payload);
       return {...state,products:payload.products}
      
    default :
      return state;
  }
};

export default productsReducer;
