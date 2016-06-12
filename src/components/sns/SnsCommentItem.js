import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {DefaultRoute} from 'react-router';
import { Media} from 'react-bootstrap';
import './sns.less';

export default class SnsCommentItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Media>
                <Media.Left>
                    <img width={32} height={32} src="/image/sns/test.jpg" alt="Image"/>
                </Media.Left>
                <Media.Body>
                    <p><span className="commentList">@{this.props.userId}</span> {this.props.contents}</p>
                </Media.Body>
            </Media>
        );
    }
}

SnsCommentItem.propTypes = {
    formValue: PropTypes.object
}


