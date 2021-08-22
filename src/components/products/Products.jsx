import React from "react";
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function Products(props) {
  return (
  <>
  <p style={{ marginLeft: '46%', fontSize: '25px' }}>{props.active}</p>
      <Grid
        item
        sm={5}
        style={{
          display: 'grid',
          gridColumnGap: '50px',
          gridTemplateColumns: 'auto auto auto',
        }}
      >
        {props.products.map(product => {
          if (props.active === product.category) {
            return (
              <Card
                style={{
                  borderRadius: '10px',
                  width: '18rem',
                  height: '400px',
                  marginTop: '5px',
                  marginLeft: '90%',
                  marginBottom :'200px',
                  border: '1px solid gray',
                }}
                className={`cards ${product.name}`}
                key={product.name}
              >
                <CardMedia className={'img'} image={product.img} />
                <img
                  alt={product.name}
                  src={product.image}
                  width='120'
                  height='100'
                  style={{ marginLeft: '80px', marginTop: '10px' }}
                ></img>
                <CardContent>
                  <h2>{product.name}</h2>
                </CardContent>
                <CardContent >
                  Price : {product.price}$
                </CardContent>
                <CardContent >
                  In Stock : {product.count}
                </CardContent>
                <section className='btnn'>
                  <Button variant='light' style={{ border: '1px solid gray' }}>
                    ADD TO CART
                  </Button>
                  <Button variant='light' style={{ border: '1px solid gray' }}>
                    VIEW DETAILS
                  </Button>
                </section>
              </Card>
            );
          } else {
            return '';
          }
        })}
      </Grid>
    </>
  );
}

const mapStateToProps = state => {
  return { active: state.categories.active, products: state.products.products };
};

export default connect(mapStateToProps)(Products);