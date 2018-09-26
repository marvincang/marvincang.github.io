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
              <p>
                ... is a project to create a data discovery platform for GO-JEK, Indonesia's first unicorn. With thousands of transactions a day from its micro-services, the Business Intelligence department of GO-JEK received increasing number of ad-hoc requests from business analysts about where are the data they want or what are the data about.
              </p>
              <p>
                Datadex has two main purpose:
                <ol>
                  <li>to make data more discoverable,</li>
                  <li>to be the single source of truth for data-related problems.</li>
                </ol>
              </p>
              <p>
                Within three months, the project was done from scratch to its third beta version. Even though I was the only person dedicated to this project, there were some full-time employees who helped contributing in other parts of the application, such as designing the infrastructure and deploying to the server. The core frontend of Datadex is built with React and the backend runs in a Node server.
              </p>
              <p>
                The project is now a property of GO-JEK Indonesia.
              </p>
            </ProjectButton>
          </Col>
          <Col xs={4} md={4}>
            <ProjectButton title="Wake Stage Classifier" imageSrc="./placeholder.jpg" />
          </Col>
          <Col xs={4} md={4}>
            <ProjectButton title="PERMIAS Nasional Database" imageSrc="./placeholder.jpg" />
          </Col>
        </Row>
        <Row className="items">
          <Col xs={4} md={4}>
            <ProjectButton title="CampusEats" imageSrc="./placeholder.jpg" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
