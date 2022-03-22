import { Grid, Link } from '@material-ui/core';
import React from 'react';

const OurServices = () => {
  return (
    <Grid item md={3}>
      <h3 className="brand-text">Services</h3>
      <Link className="link" to="/">
        <h4 className="secondary-text">Relaible Property</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Lowest coast</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Relaible Property</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Lowest coast</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Relaible Property</h4>
      </Link>
      <Link className="link" to="/">
        <h4 className="secondary-text">Lowest coast</h4>
      </Link>
    </Grid>
  );
};

export default OurServices;
