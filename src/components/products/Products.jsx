import React,{useEffect} from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button  from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { addCart } from "../../store/actions/addCart";
import {getData} from '../../store/actions/action';


function Products(props) {
  useEffect (() => {
    props.getData();
  },[]);

  return (
    <>
      <p style={{ marginLeft: "46%", fontSize: "25px" }}>{props.active}</p>
      <Grid
        item
        sm={5}
        style={{
          display: "grid",
          gridColumnGap: "50px",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        {props.products.activeProducts.map((product) => {
          console.log('props.products',props.products);
          if (props.active === product.category) {
            return (
              <Card
                style={{
                  borderRadius: "10px",
                  width: "18rem",
                  height: '30rem',
                  marginTop: "5px",
                  marginLeft: "20%",
                  marginBottom: "60px",
                  border: "1px solid gray",
                }}
                className={`cards ${product.name}`}
                key={product.id}
              >
                <CardActionArea>
                  <CardMedia className={"img"} image={product.url} />
                  <img
                    alt={product.name}
                    src={product.url}
                    width="200"
                    height="150"
                    style={{ marginLeft: "50px", marginTop: "10px" }}
                  ></img>
                  <CardContent>
                    <h2>{product.name}</h2>
                  </CardContent>
                  <CardContent>Price : {product.price}$</CardContent>
                  <CardContent>In Stock : {product.inStock}</CardContent>
                </CardActionArea>
                <section className="btnn">
                  <CardActions>
                    <Button
                      variant="light"
                      style={{ border: "1px solid gray" }}
                      onClick={(count) => {
                        console.log ('after Click',product.inStock);
              
                        if (product.inStock) props.addCart(product);
                        else alert("OUT OF STOCK");
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="light"
                      style={{ border: "1px solid gray" }}
                    >
                      VIEW DETAILS
                    </Button>
                  </CardActions>
                </section>
              </Card>
            );
          } else {
            return "";
          }
        })}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return { active: state.categories.active, products: state.products};
};
const mapDispatchToProps = { addCart,getData };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
