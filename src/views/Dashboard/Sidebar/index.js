import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  ListGroup,
  ListGroupItem,
  Progress,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSuitcase,
  faMobile,
  faUserPlus,
  faTag,
  faTachometerAlt,
  faEdit,
  faFile,
  faPowerOff,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

const EmployerSidebar = () => {
  const userauth = useSelector((state) => state.userAuth);
  return (
    <Card className="sidebar-nav mb-6">
      {/* <CardImg
        className="w-50 m-auto"
        src="https://scontent.fcgp8-1.fna.fbcdn.net/v/t1.0-9/160602385_3080232288874014_5919008396805321248_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xfK313Onjd4AX981iYx&_nc_ht=scontent.fcgp8-1.fna&oh=af0dbd7acf5650ab1264812fbed4ebc2&oe=60822688"
      /> */}
      <div className="text-center mt-5">
        <h6>Profile</h6>
        <CardTitle tag="h5" />
        Email: &nbsp;{userauth?.user.email}
        <p>
          Name: {userauth?.user.firstName} &nbsp;
          {userauth?.user.lastName}
        </p>
      </div>

      <CardBody className="p-0 mt-5">
        <ListGroup>
          <ListGroupItem>
            <NavLink
              exact
              to="/dashboard/signup"
              className="text-decoration-none"
            >
              <FontAwesomeIcon
                className="text-primary me-3"
                icon={faSuitcase}
              />
              Police SignUp
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/dashboard" className="text-decoration-none">
              <FontAwesomeIcon
                className="text-primary me-3"
                icon={faTachometerAlt}
              />
              Posts
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default EmployerSidebar;
