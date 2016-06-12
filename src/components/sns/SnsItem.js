import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {DefaultRoute} from 'react-router';
import { Well, Panel, Input, Col, Image} from 'react-bootstrap';
import './sns.less';
import SnsFileItem from './SnsFileItem';
import SnsCommentItem from './SnsCommentItem';

export default class SnsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileDetails:false,
            commentDetails:false
        }
        console.log('test'+this.state.fileDetails);

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

                    <div className="fileList">
                        <i className="fa  fa-folder-open-o" aria-hidden="true"></i><Input type="checkbox" label="첨부파일" />

                        <span className="glyphicon glyphicon-chevron-down" onclick={()=>this.setState({fileDetails: !this.state.fileDetails})}></span>
                        <hr />

                        <div className="fileDropdown">
                            {this.props.fileLists.map((contact, i) => {
                                return (<SnsFileItem fileNum={contact.fileNum}
                                                     filePath={contact.filePath}
                                                     fileNm={contact.fileNm}
                                                     key={i}/>);
                            })}
                        </div>
                    </div>

                    <p className="commentCnt"><span>댓글 {this.props.commentCount}개</span></p>
                    <Well className="commentable">

                        {this.props.commentList.map((contact, i) => {
                            return (<SnsCommentItem userId={contact.userId}
                                                    commentNum={contact.commentNum}
                                                    contents={contact.contents}
                                                    key={i}/>);
                        })}

                        <div className="commentInsert">
                            <div className="profile"><img width={32} height={32} src="/image/sns/test.jpg" alt="Image" thumbnail /></div>
                            <div className="comment"><Input type="text" placeholder="Enter text" /></div>
                        </div>

                    </Well>
                </div>
            </Panel>
        );
    }
}

SnsItem.propTypes = {
    formValue: PropTypes.object,
    fileLists: PropTypes.arrayOf(PropTypes.object)
}


