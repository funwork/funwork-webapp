import React, { Component, PropTypes } from 'react';
import { PanelGroup} from 'react-bootstrap';
import './sns.less';
import autobind from 'autobind-decorator';
import Forms from './SnsForm';
import Lists from './SnsList';

//주 (상태 저장) 컴포넌트
//snsForm과 snsList을 랜더링
//formValue 를 handleClick 콜백을 속성을 통해 전달 
export default class Sns extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show:true,
            test:true,
            formValue: {}
        };
    }

    //form 전송 시 formValue값을 
    @autobind
    handleClick(formValue) {
        this.setState({ formValue : formValue });
    }


    render() {
        return (
        <PanelGroup id="snsPanel">
            <Forms handleClick={this.handleClick} />
            <Lists formValue={this.state.formValue} snsLists={this.props.snsLists} />
        </PanelGroup>
        );
    }

}

Sns.propTypes = {
    snsLists: PropTypes.arrayOf(PropTypes.object)
}
