import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import './../styles/ProjectButton.css';

class ProjectButton extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className="project-button">
        <Image src="./datadex.png" className="logo"/>
        {this.props.title}
      </div>
    )
  }
}

export default ProjectButton;
