import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './../styles/Navbar.css';

class HeaderNavbar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Marvin Cangcianno</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/profile">
            Profile
          </NavItem>
          <NavItem eventKey={2} href="/projects">
            Projects
          </NavItem>
          <NavItem eventKey={3} href="/contact">
            Contact
          </NavItem>
          <NavItem eventKey={4} href="/resume">
            Resume
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderNavbar;
