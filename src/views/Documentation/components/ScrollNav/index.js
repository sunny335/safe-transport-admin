import React from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import pageScroll from 'src/utils/pageScroll';

const ScrollNav = (props) => {
  const { list } = props;
  return (
    <PerfectScrollbar>
      <ul>
        {Array.isArray(list) &&
          list.map((item, i) => (
            <li key={i}>
              <Link
                to={`#${item}`}
                className="text-capitalize"
                onClick={pageScroll}
              >
                {item}
              </Link>
            </li>
          ))}
      </ul>
    </PerfectScrollbar>
  );
};

export default ScrollNav;
