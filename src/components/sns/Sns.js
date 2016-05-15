import React, { Component, PropTypes } from 'react';
import { PanelGroup} from 'react-bootstrap';
import './sns.less';
import Forms from './SnsForm';
import Lists from './SnsList';

export default class Sns extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show:true,
            test:true
        };
    }

    render() {
        return (
        <PanelGroup id="snsPanel">
            <Forms />
            <Lists />
        </PanelGroup>
        );
    }

}
