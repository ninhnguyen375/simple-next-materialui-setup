import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

const cards = [1, 2, 3, 4, 5, 6];
const ProductList = () => (
  <div style={{ maxWidth: 1000, margin: '50px auto' }}>
    <Grid container spacing={40}>
      {cards.map(card => (
        <Grid item key={card} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              image="https://picsum.photos/200/200/?random"
              title="Image title"
              style={{ height: 200 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default ProductList;
