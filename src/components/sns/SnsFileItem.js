import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {DefaultRoute} from 'react-router';
import { Input} from 'react-bootstrap';
import './sns.less';

export default class SnsFileItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>
                <i className="fa fa-file-excel-o" aria-hidden="true"></i><Input type="checkbox" label={this.props.fileNm} />
            </span>
        );
    }
}

SnsFileItem.propTypes = {
    formValue: PropTypes.object
}


