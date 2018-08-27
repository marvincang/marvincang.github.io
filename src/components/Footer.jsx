import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Jumbotron className="footer">
        <p>&copy; 2018 Marvin Cangcianno (Work In Progress)</p>
      </Jumbotron>
    );
  }
}

export default Footer;
