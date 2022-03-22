import { Grid } from '@material-ui/core';
import React from 'react';
import doctor from 'src/assets/images/doctor1.png';
import './AboutAppoinment.css';
import dentalChair from 'src/assets/images/dental-chair.png';
const AboutAppoinment = () => {
  return (
    <div
      style={{
        marginTop: '150px',
        background: `linear-gradient(to right,  rgba(59, 66, 85, 0.938),rgba(59, 66, 85, 0.938)),url(${dentalChair})`,
        backgroundSize: 'cover',
      }}
    >
      <Grid
        container
        item
        xs={12}
        className="about-appoinment-container"
        style={{ width: '90%', margin: 'auto' }}
      >
        <Grid item md={6}>
          <img src={doctor} alt="" />
        </Grid>
        <Grid item md={6}>
          <h3 style={{ color: '#1CC7C1' }}>Appoinment</h3>
          <h1 style={{ color: 'white' }}>Make an Appoinment Today</h1>
          <p style={{ color: 'white' }}>
            It is a long established fact that a reader will be distracted by
            the redable content of the page when looking at its
          </p>
          <button className="button">Learn more</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutAppoinment;
