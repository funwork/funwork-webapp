import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Icon from 'react-fa';

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel style={{ width: '350', margin: '0 auto' }}>
        <div className="text-center">
          <h4 className="content-group">Login!</h4>
        </div>
        <hr />
        <div>
          Hello World
        </div>
      </Panel>
    );
  }
}
