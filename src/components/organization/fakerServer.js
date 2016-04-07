export default class OrganFakerServer {

  constructor() {}

  static getTreeData() {
    return [
      {
        title: 'funwork',
        key: 'D1',
        children: [
          {
            title: 'OpenSource Team',
            key: 'D2',
            children: [
              {
                title: '오창화',
                key: 'U1'
              },
              {
                title: '유로사리아',
                key: 'U2'
              }
            ]
          }
        ]
      }
    ];
  }
}
