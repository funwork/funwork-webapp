export default class OrganFakerServer {

  constructor() {}

  static getTreeData() {
    return [
      {
        title: 'funwork',
        key: 'DEPT1',
        type: 'DEPT',
        info: {
          id: 1
          // 부서정보
        },
        children: [
          {
            title: 'OpenSource Team',
            key: 'DEPT1-DEPT2',
            type: 'DEPT',
            info: {
              id: 2,
              parentDeptId: 1
            },
            children: [
              {
                title: '오창화',
                key: 'DEPT2-USER1',
                type: 'USER',
                info: {
                  id: 'changhwaoh@funwork.io',
                  position: 'Engineer',
                  securityGrade: 0,
                  deptId: 2
                }
              },
              {
                title: '유로사리아',
                key: 'DEPT2-USER2',
                type: 'USER',
                info: {
                  id: 'urosaria@funwork.io',
                  position: 'Engineer',
                  securityGrade: 5,
                  deptId: 2
                }
              }
            ]
          }
        ]
      }
    ];
  }

  static getLoginUser() {
    return {
      id: 'changhwaoh@funwork.io',
      position: 'Engineer',
      securityGrade: 0,
      deptId: 2
    };
  }
}
