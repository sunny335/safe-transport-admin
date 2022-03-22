import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
const ReviewDetails = ({ data }) => {
  return (
    <Grid item md={4}>
      <Card>
        <CardActionArea style={{ padding: '20px' }}>
          <CardContent style={{ textAlign: 'center', lineHeight: '25px' }}>
            <p>{data.comment}</p>
          </CardContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div>
              <img style={{ width: '50px' }} src={data.img} alt="" />
            </div>
            <div style={{ marginLeft: '20px' }}>
              <h3>{data.name}</h3>
              <p>{data.location}</p>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ReviewDetails;
