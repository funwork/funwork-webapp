import React, { Component, PropTypes } from 'react';

export default class Results extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { name, userId } = this.props.formValue;

    return (
      <span> {name} 라는 사용자의 아이디는 : {userId} 입니다</span>
    )
  }

}

Results.propTypes = {
  formValue: PropTypes.object
}