import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';

import './../styles/ProjectDetail.css';

class ProjectDetail extends Component {
  render() {
    return (
      <div>
        {this.props.body}
      </div>
    )
  }
}

export default ProjectDetail;
