import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import './../styles/Projects.css';
import ProjectButton from './../components/ProjectButton';

class Projects extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="items">
          <Col xs={4} md={4}>
            <ProjectButton title="Datadex" imageSrc="./datadex.png" >
              <PageHeader>
                Datadex <small>React, Node</small>
              </PageHeader>
              ... is a project to create a data discovery platform for GO-JEK, Indonesia's first unicorn. With thousands of transactions a day from its micro-services, the Business Intelligence department of GO-JEK received increasing number of ad-hoc requests from business analysts about where are the data they want or what are the data about. Datadex has two main purpose:
              <ol>
                <li>to make data more discoverable,</li>
                <li>to be the single source of truth for data-related problems.</li>
              </ol>
            </ProjectButton>
          </Col>
          <Col xs={4} md={4}>
            <ProjectButton title="Wake Stage Classifier" imageSrc="./datadex.png" />
          </Col>
          <Col xs={4} md={4}>
            <ProjectButton title="PERMIAS Nasional Database" imageSrc="./datadex.png" />
          </Col>
        </Row>
        <Row className="items">
          <Col xs={4} md={4}>
            <ProjectButton title="CampusEats" imageSrc="./datadex.png" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
