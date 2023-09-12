import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: '30%' }} style={{marginBottom: '25px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque ad voluptates consequatur, aliquid, mollitia debitis aliquam necessitatibus aspernatur maiores reiciendis et quam ut sit totam, animi quaerat odit voluptatem laudantium sunt.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Code</Button>
        <Button size="small">Live</Button>
      </CardActions>
    </Card>
  );
}