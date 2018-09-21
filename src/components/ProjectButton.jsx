import React, { Component } from 'react';
import { Image, Modal } from 'react-bootstrap';
import ProjectDetail from './ProjectDetail';

import './../styles/ProjectButton.css';

class ProjectButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <div className="project-button" onClick={this.showModal}>
          <Image src={this.props.imageSrc} className="logo"/>
          {this.props.title}
        </div>
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton />
          <Modal.Body>
            <ProjectDetail title={this.props.title} body={this.props.children}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ProjectButton;
