import { Grid } from '@material-ui/core';
import React from 'react';
import man1 from 'src/assets/images/man1.png';
import woman1 from 'src/assets/images/woman1.png';
import woman2 from 'src/assets/images/woman2.png';
import quote from 'src/assets/images/quote.png';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const Reviews = () => {
  const reviewData = [
    {
      name: 'Winson Harry',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ex eligendi cum maiores, in itaque dolore provident quo fugiat corporis atque quis quasi nobis vero enim quisquam minima pariatur voluptate.',
      location: 'California',
      img: man1,
    },
    {
      name: 'Winson Harry',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ex eligendi cum maiores, in itaque dolore provident quo fugiat corporis atque quis quasi nobis vero enim quisquam minima pariatur voluptate.',
      location: 'California',
      img: woman1,
    },
    {
      name: 'Winson Harry',
      comment:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ex eligendi cum maiores, in itaque dolore provident quo fugiat corporis atque quis quasi nobis vero enim quisquam minima pariatur voluptate.',
      location: 'California',
      img: woman2,
    },
  ];
  return (
    <div style={{ width: '90%', margin: 'auto', marginTop: '100px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '88%',
          margin: 'auto',
        }}
      >
        <div>
          <h3 style={{ color: 'rgb(28, 199, 193)' }}>Testimonial</h3>
          <h1 style={{ color: '#757375' }}>What's Our Patients Says</h1>
        </div>
        <div>
          <img style={{ width: '120px' }} src={quote} alt="" />
        </div>
      </div>
      <Grid
        container
        item
        xs={12}
        spacing="3"
        style={{ width: '80%', margin: 'auto', marginTop: '50px' }}
      >
        {reviewData.map((data) => {
          return <ReviewDetails data={data}></ReviewDetails>;
        })}
      </Grid>
    </div>
  );
};

export default Reviews;
