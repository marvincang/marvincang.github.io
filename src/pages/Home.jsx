import React from 'react';
import { Jumbotron, Table } from 'react-bootstrap';
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
    this.setState({
      showBackground: true,
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
        <div className="content-flexbox">
          <div onClick={() => this.redirectTo('profile')}>ABOUT ME</div>
          <div onClick={() => this.redirectTo('contact')}>CONTACT</div>
          <div onClick={() => this.redirectTo('resume')}>RESUME</div>
        </div>
      </div>
    );
  }
}

export default Home;
