import React from 'react';
import { Grid, Row, Col, Jumbotron, Image } from 'react-bootstrap';
import './../styles/Profile.css';

class Profile extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={4} md={4}>
            <Image src="pp.jpg" circle className="profile-pic"/>
          </Col>
          <Col xs={12} sm={4} md={8}>
            <div className="profile-content">
              <h3>About Me</h3>
              <p>
                Born 1997 in Jakarta, Indonesia, I am the younger son of two in our family. In 2013, I moved to the Seattle, Washington to pursue my college studies. I spent two years in North Seattle College to obtain an Associate of Science degree in Computer Science. After that, I transferred to the school with one of the best computer science program in the country, Georgia Institute of Technology.
              </p>
              <p>
                During my senior year, I had the privilege and honor to lead the Indonesian Student Association as a president. I was elected by Indonesian students and alumni to manage the group for a year. Throughout that period, I gained such valuable leadership and teamwork experience working with my friends to spread Indonesian culture throughout the campus. My status as a president ended in 2015 and in that same year I graduated as a Bachelor of Science in Computer Science with High Honor from Georgia Tech.
              </p>
              <p>
                I was fortunate enough to be eligible for the FastTrak program from Georgia Tech, hence I decided to continue on to its graduate school. Currently I am a proud Yellow Jackets with one last semester, which finishes in December 2018, to graduate as a Master of Science in Computer Science.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} md={4}>
          </Col>
          <Col xs={12} sm={4} md={8}>
            <div className="profile-content">
              <br />
              <h3>Career</h3>
              <p>
                Since February 2019, I am working as a Software Engineer at <a href="https://www.ncr.com/">NCR Corporation</a>. The team that I am working with work primarily on the Developer Experience <a href="https://developer.ncr.com">site</a>.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4} md={4}>
          </Col>
          <Col xs={12} sm={4} md={8}>
            <div className="profile-content">
              <br />
              <h3>Internship Experience</h3>
              <p>
                In the summer of 2018, I interned at one of the biggest tech company in Indonesia, <a href="https://www.go-jek.com/" rel="noopener noreferrer" target="_blank">GO-JEK</a>. I created <a href="/#/projects">Datadex</a>, a data discovery web platform tailored specifically for GO-JEK, using React. For three months, I had a blast working with some of the most talented and motivated people in Indonesia.
              </p>
              <hr />
              <Col xs={2} sm={2} md={1}>
                <p className="quote-mark"></p>
                <div className="recommender-icon">
                  RK
                </div>
              </Col>
              <Col xs={10} sm={2} md={11}>
                <p className="recommendation">
                  Marvin was a stellar intern!
                  <br />
                  <br />
                  I personally had invested my time to catch up with him in every two days because he always gets things done quickly, know what he wants and show significant growth in both hard and soft skills.
                  <br />
                  <br />
                  His contribution was on par or even more than the usual full-timer. In terms of his hard skill, he picks up tech stacks in less than a week. Before the internship started, he has proven that he has done his homework by building an MVP of a data discovery platform with React.
                  <br />
                  <br />
                  He is our co-founder for our first data discovery platform, Datadex. You can imagine it like a Google search for all the data points in GO-JEK, including metadata from BigQuery, Metabase, and analyses or any types of knowledge posts we have internally. He managed to build front-end and back-end APIs alone while connecting it to ElasticSearch by collaborating with another back-end/ data engineers. He also managed to deploy the site by teaming up with a System engineer in our team.
                  <br />
                  <br />
                  During GO-JEK Engineering Bootcamp, which was attended by 12 interns who were selected from 300 applicants, Marvin topped the class and became the mentor for all his colleagues. He managed to develop in Ruby in a few days.
                  <br />
                  <br />
                  For his soft skills, he has the potential to become a radical candor. He is very critical of the team’s engineering culture and productivity and is not afraid to speak up.
                  <br />
                  <br />
                  Since day 1, Marvin told me he wants to interact with different teams to build his project. He proactively reached out to our System engineers and other senior engineers from other divisions, including Growth team and Fraud team, for feedback and guidance.
                  <br />
                  <br />
                  I would recommend Marvin for any engineering roles. He would amaze your team.
                </p>
              </Col>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Profile;
