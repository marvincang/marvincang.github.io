import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import YouTube from 'react-youtube';
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
            <ProjectButton title="Wake Stage Classifier" imageSrc="./wake-logo.png">
              <PageHeader>
                Wake Stage Classifier <small>Python, PySpark, Sklearn</small>
              </PageHeader>
              <a href="https://docs.google.com/document/d/1IgSuqJh-Xdl_YZmLUGJxdceZ_He2FWBtMI0YpyxRSb8/edit?usp=sharing">Link to paper here</a>
              <br/>
              <p>
                This paper utilizes classification algorithm to classify wake stage using EEG channels with no prior knowledge. Existing models use fix calculation or unreliable tracking to determine the best time to wake up. Most of them also don’t explain clearly how they actually come up with the decision. In this paper, I try to make a classification model to classify whether the person is in Wake stage, at any given second during their sleep. With clear and well-explained classification algorithm, I hope it is easier for people to trust this calculation for choosing the best time to wake up that fits their preferred time window.
              </p>
              <p>
                This project is the final project of the class CSE 6250: Big Data in Healthcare during my Master's program at Georgia Institute of Technology. With accuracy of 77% and precision of 94%, I'd say this project out-performed my expectation.
              </p>
              <p>
                Watch the presentation here:
              </p>
              <YouTube
                videoId="uUgaKNPIZF8"
              />
            </ProjectButton>
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
