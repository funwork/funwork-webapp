import React, { Component } from 'react';
import { Panel, Input, Col, Image, PanelGroup, Media, Well} from 'react-bootstrap';
import './sns.less';

export default class SnsForm extends Component {

    render() {

        return (
            <form>
                <Panel eventKey="1" className="panel">
                    <Col xs={6} md={4} className="profile"><Image src="/image/sns/test.jpg" thumbnail /></Col>

                    <Input type="textarea" placeholder="글을 남겨보세요!" />

                    <div className="btnArea">
                        <p className="btnLeft">
                            <a href="#" data-hover="tooltip" data-tooltip-content="게시물에 사진 또는 동영상을 추가하세요" ><span className="btn-file"><span className="glyphicon glyphicon-file"></span><input type="file" multiple /></span></a>
                            <a href="#" data-hover="tooltip" data-tooltip-content="게시물에 사진 또는 동영상을 추가하세요" ><span className="btn-file"><span className="glyphicon glyphicon-camera"></span><input type="file" multiple /></span></a>
                        </p>
                        <div className="btnRight">
                            <Input type="select" label="Select" placeholder="select">
                                <option value="select">전체공개</option>
                                <option value="other">나만보기</option>
                            </Input>
                            <button type="button" className="btn btn-sm btn-default" >게시</button>
                        </div>
                    </div>
                </Panel>
            </form>
        );
    }
}