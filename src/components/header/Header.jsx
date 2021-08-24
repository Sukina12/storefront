import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import {deleteProduct} from '../../store/actions/deleteProduct';

const useStyle = makeStyles((theme) => ({
  space: {
    justifyContent: "space-between",
  },
}));

function Header(props) {
  const style = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" style={{ backgroundColor: "#38c172" }}>
      <Toolbar className={style.space}>
        <Button style={{ fontSize: "2rem" }}>OUR STORE </Button>
        <IconButton aria-label="CART" onClick={handleClick}>
          CART ({props.cart.num})
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {props.cart.cart.map((product,idx) => {
            console.log ('product my',props.cart);
            return (
              <MenuItem key={product.id} onClick={handleClose} >
              
              
                     <Chip
                  label = {`${product.name} Item: ${product.item}`}
                  onDelete = {() => {
                    props.deleteProduct(product);
                  }}
                />
            
            </MenuItem>
            );
          })}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
const mapStateToprops = (state) => {
  console.log(state);
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = { deleteProduct };
export default connect(mapStateToprops,mapDispatchToProps )(Header);
