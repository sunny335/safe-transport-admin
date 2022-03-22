import React from 'react';
import classNames from 'classnames';

import css from './style.css';

import helsinkiImage from './images/live1.png';
import rovaniemiImage from './images/live2.png';
import rukaImage from './images/live3.png';
import image4 from './images/live4.png';

const SectionLocations = (props) => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className="location-main">
      <div className="title">
        {/* <FormattedMessage id="SectionLocations.title" /> */}
        <span>Our Hottest Deals</span>
        <span></span>
      </div>
      <div className="locations">
        <div name="SearchPage" className="location">
          <div className="imageWrapper">
            <div className="aspectWrapper">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="locationImage"
              />
            </div>
          </div>

          <div className="getaways">
            <span>Buy Now</span>
          </div>
        </div>
        <div name="SearchPage" className="location">
          <div className="imageWrapper">
            <div className="aspectWrapper">
              <img src={rovaniemiImage} alt="" className="locationImage" />
            </div>
          </div>

          <div className="getaways">
            <span>Buy Now</span>
          </div>
        </div>
        <div name="SearchPage" className="location">
          <div className="imageWrapper">
            <div className="aspectWrapper">
              <img src={rukaImage} alt="" className="locationImage" />
            </div>
          </div>

          <div className="getaways">
            <span>Buy Now</span>
          </div>
        </div>
        <div name="SearchPage" className="location">
          <div className="imageWrapper">
            <div className="aspectWrapper">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="locationImage"
              />
            </div>
          </div>

          <div className="getaways">
            <span>Buy Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLocations;
