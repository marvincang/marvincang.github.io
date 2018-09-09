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
          <Col xs={12} sm={4} md={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Profile;
