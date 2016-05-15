import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import request from 'superagent';
import { Panel } from 'react-bootstrap';

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  @autobind
  handleClick() {
    console.log(this.refs.content.value);
    request
      .post('/api/create')
      .send({ content: this.refs.content.value })
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err || !res.ok) {
          console.log(err);
        } else {
          console.log(res.body);
        }
      });
  }

  render() {
    return (
      <Panel style={{ width: '350', margin: '0 auto' }}>
        <div className="text-center">
          <h4 className="content-group">Login!</h4>
        </div>
        <hr />
        <div>
          <input type="text" ref="content" name="content" id="content" />
          <input type="button" value="Click me" onClick={this.handleClick} />
        </div>
      </Panel>
    );
  }
}
