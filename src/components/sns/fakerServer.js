export default class SnsFakerServer {

    constructor() {}

    static getSnsData() {
        return [
            {
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
                    ],
                    commentLists: [
                        {
                            userId:'changhwa',
                            commentNum:1,
                            contents:'참석 가능합니다. 감사합니다^^'
                        },
                        {
                            userId:'dev1',
                            commentNum:2,
                            contents:'참석 불가능합니다.ㅜㅜㅜㅜ 안타깝네요'
                        }
                    ],
                    commentCount:2
                },
                {num: 2, contents: '테스트 입니다.', userId: 'test', date: '2016-06-06', dept: "기획팀",
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
                    ],
                    commentLists: [
                        {
                            userId:'changhwa',
                            commentNum:1,
                            contents:'테스트 화이팅 !!'
                        }
                    ],
                    commentCount:1
                },
                {
                    num: 3,
                    contents: '날씨가 덥군요 모두모두 건강 챙기세요!!',
                    userId: 'changhwa',
                    date: '2016-06-04',
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
                    ],
                    commentLists: [
                        {
                            userId:'changhwa',
                            commentNum:1,
                            contents:'건강조심!!'
                        },
                        {
                            userId:'dev1',
                            commentNum:2,
                            contents:'화이팅!!'
                        }
                    ],
                    commentCount:2
                },
                {
                    num: 4,
                    contents: '안녕하세요??? <br /> 테스트 입니다. 3333',
                    userId: 'ceo',
                    date: '2016-06-05',
                    dept: "CEO",
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
                    ],
                    commentLists: [
                        {
                            userId:'changhwa',
                            commentNum:1,
                            contents:'testestsetstest '
                        },
                        {
                            userId:'dev1',
                            commentNum:2,
                            contents:'test 22222222'
                        }
                    ],
                    commentCount:2
                }
            ]
            }
        ];
    }
    
}
