import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './../styles/Resume.css';

class Contact extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="items">
          <p>Last updated on 09/24/2018</p>
          <object className="resume" data="./MarvinCangciannoResume.pdf" type="application/pdf" />
        </Row>
      </Grid>
    );
  }
}

export default Contact;
