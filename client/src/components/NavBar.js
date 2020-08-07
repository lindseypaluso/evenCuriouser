import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <>
      <Navbar className="navbar navbar-expand-sm navbar-dark" expand="md">

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto navbar-nav ml-5" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  <div className="navbar-brand ml-4">
                    <img src="./assets/images/curious-bunny.png" alt="EvenCuriouser logo" width="50px" id="bunny-logo" />
                    <p className="centered">EvenCuriouser</p>
                  </div>
                </NavLink>
              </NavItem>
            </Nav>

            <Nav className="mr-auto main-nav">
              {isAuthenticated && (
                <>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/assignments"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Assignments
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/gradebook"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Gradebook
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/calendar"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Calendar
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/messages"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Messages
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/announcments"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Announcments
                  </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/announcments"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      <form className="">
                        <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label="Search" />
                      </form>
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>

            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin btn-login"
                    // onClick={() => loginWithRedirect()}
                    href="/login"
                  >
                    Log in<i className="fa fa-arrow-circle-right pl-3"></i>
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar
                className="mr-5">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block text-light">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>

      </Navbar>
    </>
  );
};

export default NavBar;
