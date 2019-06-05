import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './../styles/Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="contact-header">
          LET'S CONNECT
        </Row>
        <Row className="contact-content">
          <Col xs={12} md={4}>
            <i className="material-icons contact">phone</i>
            <h4>Primary Number</h4>
            <p>(206) 979 - 1630</p>
          </Col>
          <Col xs={12} md={4}>
            <i className="material-icons contact">mail</i>
            <h4>Primary Email</h4>
            <p className="email">
              <a href="mailto:marvincang@hotmail.com">marvincang@hotmail.com</a>
            </p>
            <h4>Work Email</h4>
            <p className="email">
            <a href="mailto:marvin.cangcianno@ncr.com">marvin.cangcianno@ncr.com</a>
            </p>
            <h4>School Email</h4>
            <p className="email">
              <a href="mailto:mcangcianno3@gatech.edu">mcangcianno3@gatech.edu</a>
            </p>
          </Col>
          <Col xs={12} md={4}>
            <i className="material-icons contact">language</i>
            {/*
            <h4>Blog</h4>
            <Image src="./icons/medium.png" className="medium-icon" href="https://medium.com/@marvincang"/>
            */}
            <h4>Social Media</h4>
            <p className="social-icons">
              <a href="https://linkedin.com/in/marvin-cangcianno/" rel="noopener noreferrer" target="_blank" className="fa fa-linkedin"> </a>
              <a href="https://twitter.com/mvcangcianno/" rel="noopener noreferrer" target="_blank" className="fa fa-twitter"> </a>
              <a href="https://facebook.com/mrcangcianno/" rel="noopener noreferrer" target="_blank" className="fa fa-facebook"> </a>
              <a href="https://instagram.com/marvincang/" rel="noopener noreferrer" target="_blank" className="fa fa-instagram"> </a>
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Contact;
