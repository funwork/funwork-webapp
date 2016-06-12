import React, { Component, PropTypes } from 'react';
import { Panel, Input, Col, Image} from 'react-bootstrap';
import './sns.less';
import SnsItem from './SnsItem';

//snsList 나타내는 컴포넌트
export default class SnsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snsLists: [
                {
                    num: 1,
                    contents: '안녕하세요??? <br /> <a href="#">&기술개발팀</a> <a href="#"><strong>@UROSARIA</strong></a> 입니다. <br /> 금일 PM6시 회사앞 #삼겹살집 에서 #회식 합니다. <br /> 모두모두 참석 바랍니다. <br />',
                    userId: 'urosaria',
                    date: '2016-06-03',
                    dept: "기술개발팀",
                    fileLists: [
                        {
                            fileNm:'file1.jpg',
                            fileNum:1,
                            filePath:'/image/sns/'
                        },
                        {
                            fileNm:'file2.jpg',
                            fileNum:2,
                            filePath:'/image/sns/'
                        }
                    ]
                },
                {num: 2, contents: '테스트 입니다.', userId: 'test', date: '2016-06-06', dept: "기획팀"},
                {
                    num: 3,
                    contents: '날씨가 덥군요 모두모두 건강 챙기세요!!',
                    userId: 'changhwa',
                    date: '2016-06-04',
                    dept: "기술개발팀"
                },
                {
                    num: 4,
                    contents: '안녕하세요??? <br /> 테스트 입니다. 3333',
                    userId: 'ceo',
                    date: '2016-06-05',
                    dept: "CEO"
                }
            ]
        };

    }

    render() {

        //let filteredSnsLists=this.props.snsLists.filter(
         //   (snsList)=>snsList.contents.indexOf(this.props.filterText) !== -1
        //);

        //const { contents,id } = this.props.formValue;

        // let getStyle = isSelect => {
        //     if(isSelect) return;
        //
        //     let style = {
        //
        //         display: 'none'
        //     };
        //
        //     return style;
        // };

        // const title = (
        //     <div bsStyle="link">
        //         <Col xs={6} md={4} className="profile"><Image src="/image/sns/test.jpg" thumbnail /></Col>
        //         <a href="#"><strong>@UROSARIA</strong></a> / <a href="#" className="dept">&기술개발팀</a>
        //         <p className="date">2016.04.17</p>
        //     </div>
        // );

        return (
            <div>
                {this.state.snsLists.map((contact, i) => {
                    return (<SnsItem num={contact.num}
                                     contents={contact.contents}
                                     userId={contact.userId}
                                     date={contact.date}
                                     dept={contact.dept}
                                     fileLists={contact.fileLists}
                                     key={i}/>);
                })}
            </div>

        );
    }
}

SnsList.propTypes = {
    formValue: PropTypes.object,
    snsLists: PropTypes.arrayOf(PropTypes.object)
}

