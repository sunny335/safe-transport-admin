import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/auth.actions';
import Logo from '../../assets/images/safe/Qrbg.png';

const Header = () => {
  const location = useLocation();

  console.log('loc', location.pathname);
  const auth = useSelector((state) => state.auth);
  const userauth = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  // console.log('use Auth', userauth);
  const renderLoggedInLinks = () => {
    return (
      <Nav className="d-flex align-items-center">
        {userauth.user.firstName && (
          <li
            className="rounded-circle bg-secondary px-3 py-2 d-flex align-items-center justify-content-center"
            style={{ height: '40px', width: '40px' }}
          >
            <Link to="/profile">
              <div className="text-white fw-bold text-uppercase">
                {userauth?.user.firstName.charAt(0)}.
                {userauth?.user.lastName.charAt(0)}
              </div>
            </Link>
          </li>
        )}
        <li className="nav-item ms-3">
          <span
            className="nav-link"
            onClick={logout}
            style={{ cursor: 'pointer' }}
            className="bg-primary text-white p-3 py-2"
          >
            Signout
          </span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        {/* <li className="nav-item">
          <NavLink
            to="/signin"
            className="nav-link me-3 bg-secondary border rounded"
          >
            Signin
          </NavLink>
        </li> */}
      </Nav>
    );
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant=""
      style={{ zIndex: 1, backgroundColor: '#f5f5f5' }}
      className="navbar-fixed-top"
    >
      <Container fluid className="justify-content-between">
        <img
          src={Logo}
          alt=""
          height="60px"
          // className="w-25"
        />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mr-auto" />
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
