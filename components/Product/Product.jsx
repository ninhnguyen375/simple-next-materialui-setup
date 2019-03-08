import React from 'react';
import { Grid, Fab } from '@material-ui/core';
import ProductList from './ProductList';

const buttons = ['1', '2', '3', '4'];
const Product = () => (
  <div>
    <ProductList />
    <Grid container justify="center">
      {buttons.map(b => (
        <Fab key={b} size="small" style={{ margin: 5 }}>
          {b}
        </Fab>
      ))}
    </Grid>
  </div>
);

export default Product;
