import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './../styles/Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="items">
          <Col xs={4} md={4}>
            <div>Datadex</div>
          </Col>
          <Col xs={4} md={4}>
            <div>Wake Stage Classifier</div>
          </Col>
          <Col xs={4} md={4}>
            <div>PERMIAS Nasional Database</div>
          </Col>
        </Row>
        <Row className="items">
          <Col xs={4} md={4}>
            <div>CampusEats</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
