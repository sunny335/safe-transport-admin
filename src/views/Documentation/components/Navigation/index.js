import React from 'react';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import Sidebar from '../Sidebar';

const Navigation = (props) => {
  const { navs } = props;
  return (
    <Sidebar heading="Documents">
      <PerfectScrollbar>
        <ul>
          {Array.isArray(navs) &&
            navs.map((item, i) => (
              <li key={i}>
                <NavLink
                  exact
                  to={`/docs${item[1]}`}
                  className="text-capitalize"
                >
                  {item[0]}
                </NavLink>
              </li>
            ))}
        </ul>
      </PerfectScrollbar>
    </Sidebar>
  );
};

export default Navigation;
