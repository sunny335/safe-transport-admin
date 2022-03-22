import { Grid } from '@material-ui/core';
import React from 'react';
import quote from 'src/assets/images/quote.png';
import BlogDetails from './BlogDetails/BlogDetails';
import woman from 'src/assets/images/woman2.png';
import man from 'src/assets/images/man1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  const blogsData = [
    {
      name: 'Dr. Caudi',
      date: '23 April 2019',
      img: man,
      title: '2 times of brush can keep you healthy',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis magnam autem animi laborum ex perferendis nesciunt saepe provident iste.',
    },
    {
      name: 'Dr. Winson',
      date: '23 April 2019',
      img: woman,
      title: 'The tooth cancer is taking a challenge',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis magnam autem animi laborum ex perferendis nesciunt saepe provident iste.',
    },
  ];
  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <div style={{ textAlign: 'center', margin: '100px 0 80px' }}>
        <h3 className="brand-text">Our Blog</h3>
        <h1 className="secondary-text">From Our Blog News</h1>
      </div>
      <Grid container item xs={12} spacing="5">
        <Grid
          item
          md={4}
          style={{
            background: `linear-gradient(to right,rgba(60, 221, 159,0.75),rgba(22, 205, 211, 0.71)),
                url(${quote})`,
            height: '385px',
            marginTop: '17px',
            borderRadius: '5px',
          }}
        >
          <div style={{ color: 'white', padding: '20px', marginTop: '60px' }}>
            <h4>Rashed Kabir</h4>
            <h5>22 Aug 2019</h5>
            <h3>Check at least a doctor in a year for your teeth</h3>
            {/* <ArrowRightAltIcon></ArrowRightAltIcon> */}
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </div>
        </Grid>
        {blogsData.map((data) => (
          <BlogDetails data={data}></BlogDetails>
        ))}
      </Grid>
    </div>
  );
};

export default Blogs;
