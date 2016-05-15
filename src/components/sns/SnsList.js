import React, { Component, PropTypes } from 'react';
import { Panel, Input, Col, Image} from 'react-bootstrap';
import './sns.less';
import CommnetLists from './SnsComment';

export default class SnsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show:true,
            test:true
        };

    }

    _show() {
        console.log("show!!!!"+this.state.show);

        if(this.state.show){
            this.setState({
                show: false
            });
        }else{
            this.setState({
                show: true
            });
        }
    }

    _test() {
        console.log("show!!!!"+this.state.test);

        if(this.state.test){
            this.setState({
                test: false
            });
        }else{
            this.setState({
                test: true
            });
        }
    }

    render() {

        let getStyle = isSelect => {
            if(isSelect) return;

            let style = {

                display: 'none'
            };

            return style;
        };

        const title = (
            <div bsStyle="link">
                <Col xs={6} md={4} className="profile"><Image src="/image/sns/test.jpg" thumbnail /></Col>
                <a href="#"><strong>@UROSARIA</strong></a> / <a href="#" className="dept">&기술개발팀</a>
                <p className="date">2016.04.17</p>
            </div>
        );

        return (
            <Panel eventKey="2" header={ title } className="panel">
                <div>
                    안녕하세요??? <br />
                    <a href="#">&기술개발팀</a> <a href="#"><strong>@UROSARIA</strong></a> 입니다. <br />
                    금일 PM6시 회사앞 #삼겹살집 에서 #회식 합니다. <br />
                    모두모두 참석 바랍니다. <br />
                    <div className="fileList">
                        <i className="fa  fa-folder-open-o" aria-hidden="true"></i><Input type="checkbox" label="첨부파일" />

                        <span onClick={this._test.bind(this)} className="glyphicon glyphicon-chevron-down"></span>
                        <hr />
                        <div className="fileDropdown" style={getStyle(this.state.test)} >
                            <i className="fa fa-file-excel-o" aria-hidden="true"></i><Input type="checkbox" label="휴가신청서.xls" />
                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i><Input type="checkbox" label="집에가고싶다.pdf" />
                        </div>
                    </div>
                </div>
                <p className="commentCnt"><span>댓글 3개</span></p>

                <CommnetLists />
            </Panel>
        );
    }
}
