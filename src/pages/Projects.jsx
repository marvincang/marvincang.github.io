import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './../styles/Projects.css';
import ProjectButton from './../components/ProjectButton';

class Projects extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="items">
          <Col xs={4} md={4}>
            <ProjectButton title="Datadex" />
          </Col>
          <Col xs={4} md={4}>
            <ProjectButton title="Wake Stage Classifier" />
          </Col>
          <Col xs={4} md={4}>
            <ProjectButton title="PERMIAS Nasional Database" />
          </Col>
        </Row>
        <Row className="items">
          <Col xs={4} md={4}>
            <ProjectButton title="CampusEats" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
