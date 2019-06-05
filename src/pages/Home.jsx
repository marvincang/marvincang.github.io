import React from 'react';
import { Jumbotron, Table, Fade } from 'react-bootstrap';
import CircularProgressbar from 'react-circular-progressbar';
import Typed from 'typed.js';

import 'react-circular-progressbar/dist/styles.css';
import './../styles/Home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      percentage: 0,
      showRoles: false,
      controller: 'skip',
    }
  }

  onTypedComplete = () => {
    this.setState({
      showRoles: true,
      controller: 'replay',
    })
  }

  onEachStringComplete = () => {
    this.setState({
      percentage: this.state.percentage + 25,
    })
  }

  redirectTo = (url) => {
    window.location = `${process.env.PUBLIC_URL}/#/${url}`;
  }

  componentDidMount() {
    const strings = ['I develop', 'I work', 'I learn', 'I am Marvin Cangcianno. Hello!'];
    const options = {
      strings,
      typeSpeed: 70,
      backSpeed: 30,
      showCursor: false,
      onStringTyped: this.onEachStringComplete,
      onComplete: this.onTypedComplete,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  skipContent = () => {
    this.typed.stop();
    this.el.innerHTML = 'I am Marvin Cangcianno. Hello!';
    this.setState({
      percentage: 100,
      showRoles: true,
      controller: 'replay',
    })
  }

  replayContent = () => {
    this.typed.toggle();
    this.typed.reset();
    this.setState({
      percentage: 0,
      controller: 'skip',
    })
  }

  render() {
    let controller = this.state.controller === 'replay' ? (
      <div id="replay">
        <i className="material-icons" onClick={this.replayContent}>replay</i>
      </div>
    ) : (
      <div id="skip">
        <i className="material-icons" onClick={this.skipContent}>skip_next</i>
      </div>
    );

    return (
      <div>
        <Jumbotron className="content">
          <span>
            &nbsp;
            <div
              className="title"
              ref={(el) => {
                this.el = el;
              }}
              />
          </span>
        </Jumbotron>
        <div className="content-controller">
          <div>
            <CircularProgressbar
              percentage={this.state.percentage}
            />
          </div>
          {controller}
        </div>
        <Fade in={this.state.showRoles}>
          <div className="content-roles">
            Web Developer /
            <a href="https://www.gatech.edu/"> Georgia Tech</a> '19 /
            Software Engineer at <a href="https://www.ncr.com/">NCR Corporation</a>
          </div>
        </Fade>
        <div className="content-flexbox">
          <div onClick={() => this.redirectTo('profile')}>LEARN MORE ABOUT ME</div>
        </div>
      </div>
    );
  }
}

export default Home;
