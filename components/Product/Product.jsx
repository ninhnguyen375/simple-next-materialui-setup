import React, { Component } from 'react';
import ProductList from './ProductList';
import { Grid, Fab } from '@material-ui/core';

const buttons = ['1', '2', '3', '4'];
export class Product extends Component {
  render() {
    return (
      <div>
        <ProductList />
        <Grid container justify="center">
          {buttons.map((b, i) => (
            <Fab key={i} size="small" style={{ margin: 5 }}>
              {b}
            </Fab>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Product;
