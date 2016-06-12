import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {DefaultRoute, Route, Router} from 'react-router';
import { Panel, Input, Col, Image} from 'react-bootstrap';
import './sns.less';

export default class SnsFileItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fileList">
                <i className="fa  fa-folder-open-o" aria-hidden="true"></i><Input type="checkbox" label="첨부파일" />

                <span className="glyphicon glyphicon-chevron-down"></span>
                <hr />
                <div className="fileDropdown">
                    <i className="fa fa-file-excel-o" aria-hidden="true"></i><Input type="checkbox" label="휴가신청서.xls" />
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i><Input type="checkbox" label="집에가고싶다.pdf" />
                </div>
            </div>             
        );
    }
}

SnsFileItem.propTypes = {
    formValue: PropTypes.object
}


