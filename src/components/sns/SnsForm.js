import React, { Component, PropTypes} from 'react';
import { Panel, Input, Col, Image} from 'react-bootstrap';
import './sns.less';
import autobind from 'autobind-decorator';

//snsForm 컴포넌트
//부모에서 속성을 통해  handleClick을 받는 순수 컴포넌트
export default class SnsForm extends Component {

    constructor(props) {
        super(props);
    }

    //속성을 통해 콜백을 받고 onClick 이벤트에 반응해 콜백을 호출
    @autobind
    handleClick() {
        const formValue = {
            contents : this.refs.contents.getValue(),
            openYn : this.refs.openYn.getValue(),
            userId : 'UROSARIA',
            date : '2016-05-25'
        };
        this.props.handleClick(formValue);
    }

    render() {

        return (
            <form>
                <Panel eventKey="1" className="panel">
                    <Col xs={6} md={4} className="profile"><Image src="/image/sns/test.jpg" thumbnail /></Col>

                    <Input type="textarea" ref="contents" placeholder="글을 남겨보세요!" />

                    <div className="btnArea">
                        <p className="btnLeft">
                            <a href="#" data-hover="tooltip" data-tooltip-content="게시물에 사진 또는 동영상을 추가하세요" ><span className="btn-file"><span className="glyphicon glyphicon-file"></span><input type="file" multiple /></span></a>
                            <a href="#" data-hover="tooltip" data-tooltip-content="게시물에 사진 또는 동영상을 추가하세요" ><span className="btn-file"><span className="glyphicon glyphicon-camera"></span><input type="file" multiple /></span></a>
                        </p>
                        <div className="btnRight">
                            <Input ref="openYn" type="select" label="Select" placeholder="select">
                                <option value="select">전체공개</option>
                                <option value="other">나만보기</option>
                            </Input>
                            <button type="button" onClick={this.handleClick} className="btn btn-sm btn-default" >게시</button>
                        </div>
                    </div>
                </Panel>
            </form>
        );
    }
}

//속성 유효성검사 
SnsForm.propTypes = {
    handleClick: PropTypes.func.isRequired
};
