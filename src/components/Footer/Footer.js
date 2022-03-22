import { Grid, Link } from '@material-ui/core';
import React from 'react';
import Address from './Address/Address';
import OralHealth from './OralHealth/OralHealth';
import OurServices from './OurServices/OurServices';
import footerBg from 'src/assets/images/footer-bg.png';
const Footer = () => {
  return (
    <div
      style={{
        background: `url(${footerBg})`,
        backgroundSize: 'cover',
        padding: '20px',
        marginTop: '60px',
      }}
    >
      <Grid container item xs={12} style={{ width: '90%', margin: 'auto' }}>
        <Grid container item md={3} justify="center" direction="column">
          <div>
            <Link className="link" to="/">
              <h4 className="secondary-text">latest Sales</h4>
            </Link>
            <Link className="link" to="/">
              <h4 className="secondary-text">latest Sales</h4>
            </Link>
            <Link className="link" to="/">
              <h4 className="secondary-text">latest Sales</h4>
            </Link>
            <Link className="link" to="/">
              <h4 className="secondary-text">latest Sales</h4>
            </Link>
            <Link className="link" to="/">
              <h4 className="secondary-text">latest Sales</h4>
            </Link>
          </div>
        </Grid>
        <OurServices></OurServices>
        <OralHealth></OralHealth>
        <Address></Address>
      </Grid>
      <h4
        className="secondary-text"
        style={{ textAlign: 'center', margin: '60px 0 30px' }}
      >
        Copyright {new Date().getFullYear()} All Rights Reserved
      </h4>
    </div>
  );
};

export default Footer;
