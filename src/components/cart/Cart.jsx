// import React,{useState} from 'react';
// import {connect} from 'react-redux';
// import {If} from 'react-if';
// import { makeStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
// import Paper from '@material-ui/core/Paper';
// // import TagFacesIcon from '@material-ui/core/TagFaces';
// import {deleteProduct} from '../../store/actions/deleteProduct';

// const useStyle = makeStyles(theme => ( {
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     listStyle: 'none',
//     padding: theme.spacing(0.5),
//     margin: 0,
//   },
//   chip: {
//     margin: theme.spacing(0.5),
//   },
// }));


// function Cart(props) {
//   let [showCart, setshowCart] = useState(false);
//   const classes = useStyle();
//   showCart =()=>{
//     setshowCart(true);
//   }
//   return (
//     <>
//     {showCart && 
//     <>
//       <If condition ={() => props.cart.length !==0}>
//         <Paper component='ul' className={classes.root}>
//           {props.cart.map ((item,index) => {
//             return (
//               <li key ={index}>
//                 <Chip
//                   label ={item.name}
//                   onDelete = {() => {
//                     props.deleteProduct(item);
//                   }}
//                 />
//               </li>
//             )
//           })}
//         </Paper>
        
//       </If>
//       </>
//     }
//     </>  
//   );
// };
// const mapStateToProps = state => {
//   return { cart: state.cart.cart };
// };
// const mapDispatchToProps = { deleteProduct };

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
