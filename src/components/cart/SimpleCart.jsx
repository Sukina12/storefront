import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import { deleteProduct } from "../../store/actions/deleteProduct";

const useStyle = makeStyles((theme) => ({
  space: {
    justifyContent: "space-between",
  },
}));

function SimpleCart(props) {
  const style = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  className={style.space}>
       <IconButton aria-label="CART" 
       onClick={handleClick}
       style={{display:'flex'}}
       >
          CART ({props.cart.num})
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.cart.cart.map((product, idx) => {
          console.log("product my", props.cart.cart);
          return (
            <MenuItem key={product.id} onClick={handleClose}>
              <Chip
                label={`${product.name} Item: ${product.item}`}
                onDelete={() => {
                  props.deleteProduct(product);
                }}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { cart: state.cart };
};
const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
