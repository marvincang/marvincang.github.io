import React from 'react';
import { Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap';
import Typed from 'typed.js';

import './../styles/Home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      showBackground: false,
    }
  }

  onTypedComplete = (self) => {

  }

  redirectToProfile = () => {
    window.location = `${process.env.PUBLIC_URL}/profile`;
  }

  componentDidMount() {
    const strings = ['I develop', 'I work', 'I learn', 'I am Marvin Cangcianno. Hello!'];
    const options = {
      strings,
      typeSpeed: 70,
      backSpeed: 70,
      showCursor: false,
      onComplete: this.onTypedComplete,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div>
        <Jumbotron className="content">
          <div
            className="title"
            ref={(el) => {
              this.el = el;
            }}
          />
        </Jumbotron>
        <div className="content">
          <Grid>
            <Row className="icon-row">
              <Col xs={3} md={3}>
                <i className="material-icons home" onClick={this.redirectToProfile}>person</i>
              </Col>
              <Col xs={3} md={3}>
                <a className="icon" href={`${process.env.PUBLIC_URL}/projects`}>{"</>"}</a>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
