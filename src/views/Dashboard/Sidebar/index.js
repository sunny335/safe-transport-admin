import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import Police from '../../../assets/images/safe/Police.png';
import QrCode from '../../../assets/images/safe/QrCode.png';
import Manager from '../../../assets/images/safe/Manager.png';

const EmployerSidebar = () => {
  const userauth = useSelector((state) => state.userAuth);
  return (
    <Card className="sidebar-nav mb-6 border-0">
      {/* <CardImg
        className="w-50 m-auto"
        src="https://scontent.fcgp8-1.fna.fbcdn.net/v/t1.0-9/160602385_3080232288874014_5919008396805321248_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xfK313Onjd4AX981iYx&_nc_ht=scontent.fcgp8-1.fna&oh=af0dbd7acf5650ab1264812fbed4ebc2&oe=60822688"
      /> */}
      <div className="text-center mt-5">
        <h6>Admin Profile</h6>
        <CardTitle tag="h5" />
        <p className="m-0 mt-4">
          Name: {userauth?.user.firstName} &nbsp;
          {userauth?.user.lastName}
        </p>
        Email: &nbsp;{userauth?.user.email}
      </div>

      <CardBody className="p-0 mt-5">
        <ListGroup>
          <ListGroupItem className="border-0 p-0">
            <NavLink
              exact
              to="/dashboard"
              className="text-decoration-none sidebar-navs mx-0 "
            >
              <img src={Police} alt="Police" />
              Police Registration
            </NavLink>
          </ListGroupItem>
          <ListGroupItem className="border-0 p-0">
            <NavLink
              exact
              to="/dashboard/publicUser"
              className="text-decoration-none sidebar-navs mx-0 "
            >
              <img src={Manager} alt="Police" />
              All Public Users
            </NavLink>
          </ListGroupItem>
          <ListGroupItem className="border-0 p-0">
            <NavLink
              exact
              to="/dashboard/Allreport"
              className="text-decoration-none sidebar-navs mx-0  d-flex align-items-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 22 22"
                fill="none"
                style={{ marginRight: '20px', marginLeft: '8px' }}
              >
                <path
                  d="M6.86 1H15.14L21 6.86V15.14L15.14 21H6.86L1 15.14V6.86L6.86 1Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 7V11"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 15H11.01"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* <img src={Manager} alt="Police" /> */}
              All Reports
            </NavLink>
          </ListGroupItem>

          <ListGroupItem className="border-0 p-0">
            <NavLink
              exact
              to="/dashboard/signup"
              className="text-decoration-none sidebar-navs mx-0 "
            >
              <img src={QrCode} alt="Police" />
              All Generated QR Code
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default EmployerSidebar;
