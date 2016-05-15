import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import autobind from 'autobind-decorator';
import Forms from './Forms';
import Results from './Results';

export default class Sample extends Component {

  constructor(props) {
    super(props);
    this.state = { formValue: {} }
  }

  componentDidMount() {
    this.loadFromServer();
  };

  @autobind
  handleClick(formValue) {
    this.setState({ formValue : formValue });
  }

  loadFromServer() {
    this.setState({ formValue : {userId: 'load'} })
  }

  render() {
    return (
      <div>
        <Col xs={2}>
          <Forms handleClick={this.handleClick} />
        </Col>
        <Col xs={5}>
          <Results formValue={this.state.formValue} />
        </Col>
      </div>
    );
  }
}