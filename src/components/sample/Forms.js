import React, { Component, PropTypes } from 'react';
import { Input, ButtonToolbar, Button } from 'react-bootstrap';
import autobind from 'autobind-decorator';


export default class Forms extends Component {

  constructor(props) {
    super(props);
  }

  @autobind
  handleClick() {
    const formValue = {
      name : this.refs.name.getValue(),
      userId : this.refs.userId.getValue(),
      password : this.refs.password.getValue()
    };
    this.props.handleClick(formValue);
  }

  render() {
    return (
      <div>
        <Input
          ref="name"
          type="text"
          placeholder="이름"
          label="이름"
        />
        <Input
          ref="userId"
          type="text"
          placeholder="아이디"
          label="아이디"
        />
        <Input
          ref="password"
          type="password"
          placeholder="암호"
          label="암호"
        />
        <ButtonToolbar>
          <Button bsSize="small" onClick={this.handleClick}>저장</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

Forms.propTypes = {
  handleClick: PropTypes.func.isRequired
};