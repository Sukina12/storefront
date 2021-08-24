import React from "react";
import SimpleCart from '../cart/SimpleCart'
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const StyledBadge = withStyles(theme => ({
  badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
  },
}))(Badge);

const useStyle = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  },
  space: {
      justifyContent: 'space-between',
  },
}));
function Header() {
  
  
  
    const style = useStyle();
    return (
        <AppBar  position='static' style={{ backgroundColor: '#38c172', color :'black' }}>
            <Toolbar variant="dense" className={style.space}>
                {/* <Button> STORE</Button> */}
                <Typography variant="h6" color="inherit">
                    OUR STORE
                </Typography>

                <IconButton aria-label='cart'>
                    <SimpleCart />
                    <StyledBadge  color='secondary'>
                        <ShoppingCartIcon />
                    </StyledBadge>
                    {/* badgeContent={props.acart.cart.length} */}
                </IconButton>

            </Toolbar>
        </AppBar>
    );
  
}
export default Header;
