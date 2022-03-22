import { Grid, Link } from '@material-ui/core';
import React from 'react';

const OralHealth = () => {
  return (
    <Grid item md={3}>
      <h3 className="brand-text">Location</h3>
      <Link className="link" to="/">
        <h4 className="secondary-text">Dhaka</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Chandpur</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Matlab</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Chittagong</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Sylhet</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Dinajpur</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Rangpur</h4>
      </Link>
    </Grid>
  );
};

export default OralHealth;
