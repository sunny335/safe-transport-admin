import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const BlogDetails = ({ data }) => {
  return (
    <Grid item md={4}>
      <Card>
        <CardActionArea style={{ padding: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <img style={{ width: '50px' }} src={data.img} alt="" />
            </div>
            <div style={{ marginLeft: '20px' }}>
              <h4 style={{ color: '#494749' }}>{data.name}</h4>
              <h5 style={{ color: '#494749' }}>{data.date}</h5>
            </div>
          </div>
          <CardContent>
            <h2 className="secondary-text">{data.title}</h2>
            <h4
              style={{ lineHeight: '25px', color: 'rgba(117, 115, 117,0.5)' }}
            >
              {data.description}
            </h4>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default BlogDetails;
