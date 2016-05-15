import React, { Component, PropTypes } from 'react';
import { Input, Media, Well} from 'react-bootstrap';
import './sns.less';

export default class SnsComment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let getStyle = isSelect => {
            if(isSelect) return;

            let style = {
                display: 'none'
            };
            return style;
        };

        return (
            <Well className="commentable" style={getStyle(true)}>
                <Media>
                    <Media.Left>
                        <img width={32} height={32} src="/image/sns/test.jpg" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <p><span className="commentList">@changhwa</span> 참석예정 ~~ </p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left>
                        <img width={32} height={32} src="/image/sns/test.jpg" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <p><span className="commentList">@test1</span>참석하고 싶은데 아쉽네요ㅠㅠ 일이 있어서요.. 다음엔 꼭 참석하겠습니다.!! </p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left>
                        <img width={32} height={32} src="/image/sns/test.jpg" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <p><span className="commentList">@urosaria</span> @test1님 아쉬워요ㅠㅠ 다음에 꼭 참석하세용 </p>
                    </Media.Body>
                </Media>
                <div className="commentInsert">
                    <div className="profile"><img width={32} height={32} src="/image/sns/test.jpg" alt="Image" thumbnail /></div>
                    <div className="comment"><Input type="text" placeholder="Enter text" /></div>
                </div>
            </Well>
        );
    }
}