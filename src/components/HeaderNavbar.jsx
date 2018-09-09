import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './../styles/Navbar.css';

class HeaderNavbar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={`${process.env.PUBLIC_URL}/`}>Marvin Cangcianno</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href={`${process.env.PUBLIC_URL}/#/profile`}>
            Profile
          </NavItem>
          <NavItem eventKey={2} href={`${process.env.PUBLIC_URL}/#/projects`}>
            Projects
          </NavItem>
          <NavItem eventKey={3} href={`${process.env.PUBLIC_URL}/#/contact`}>
            Contact
          </NavItem>
          <NavItem eventKey={4} href={`${process.env.PUBLIC_URL}/#/resume`}>
            Resume
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderNavbar;
