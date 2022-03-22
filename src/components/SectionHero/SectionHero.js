import React from 'react';

import classNames from 'classnames';

import SearchIcon from '@material-ui/icons/Search';

import css from './SectionHero.module.css';

const SectionHero = (props) => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className="root">
      <div className="heroContent">
        <h1 className="heroMainTitle">
          {/* <FormattedMessage id="SectionHero.title" /> */}
          Real State Portal
        </h1>
        <h2 className="heroSubTitle">
          {/* <FormattedMessage id="SectionHero.subTitle" /> */}
          <span></span>
          Find Your Perfect Room
          <span></span>
        </h2>
        <button className="heroButton">
          {/* <FormattedMessage id="SectionHero.browseButton" /> */}
          Get inspired
        </button>
        <div className="FilterAreaColumn">
          <div className="filterArea">
            <input
              placeholder="search Properties Here"
              className="w-100 py-3 border-0"
            />
          </div>
          <div className="SearchIcon">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
