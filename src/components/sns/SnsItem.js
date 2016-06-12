import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {DefaultRoute, Route, Router} from 'react-router';
import { Panel, Input, Col, Image} from 'react-bootstrap';
import './sns.less';
import SnsFileItem from './SnsFileItem';
import SnsComment from './SnsComment';

export default class SnsItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const title = (
            <div bsStyle="link">
                <Col xs={6} md={4} className="profile"><Image src="/image/sns/test.jpg" thumbnail /></Col>
                <a href="#"><strong>@{this.props.userId}</strong></a> / <a href="#" className="dept">&{this.props.dept}</a>
                <p className="date">{this.props.date}</p>
            </div>
        );

        return (
            <Panel eventKey="2" header={ title } className="panel">
                <div>
                    {this.props.contents}

                    <SnsFileItem />
                    <SnsComment />
                </div>
            </Panel>
        );
    }
}

SnsItem.propTypes = {
    formValue: PropTypes.object
}


