import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { addProduct } from "../../store/actions/addProduct";

function Products(props) {
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
        {props.products.map((product) => {
          if (props.active === product.category) {
            return (
              <Card
                style={{
                  borderRadius: "10px",
                  width: "18rem",
                  height: "400px",
                  marginTop: "5px",
                  marginLeft: "20%",
                  marginBottom: "60px",
                  border: "1px solid gray",
                }}
                className={`cards ${product.name}`}
                key={product.name}
              >
                <CardActionArea>
                  <CardMedia className={"img"} image={product.img} />
                  <img
                    alt={product.name}
                    src={product.image}
                    width="120"
                    height="100"
                    style={{ marginLeft: "80px", marginTop: "10px" }}
                  ></img>
                  <CardContent>
                    <h2>{product.name}</h2>
                  </CardContent>
                  <CardContent>Price : {product.price}$</CardContent>
                </CardActionArea>
                <section className="btnn">
                  <CardActions>
                    <Button
                      variant="light"
                      style={{ border: "1px solid gray" }}
                      onClick={(count) => {
                        console.log ('after Click',product.count);
              
                        if (product.count) props.addProduct(product);
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
  return { active: state.categories.active, products: state.products.products };
};
const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
