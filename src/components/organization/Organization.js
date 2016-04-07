import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Input, Col } from 'react-bootstrap';
import OrganTree from './OrganTree';
import faker from './fakerServer';

export default class Organization extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organTree: []
    };
  }

  componentDidMount() {
    this.loadOrganTreeFromServer();
  }

  loadOrganTreeFromServer() {
    this.setState({
      organTree: faker.getTreeData()
    });
  }


  @autobind
  onExpand(expandedKeys) {
    console.log('onExpand', expandedKeys, arguments);
  }

  @autobind
  onSelect(selectedKeys, info) {
    console.log('selected', selectedKeys, info);
  }

  render() {
    return (
      <Col xs={3}>
        <div style={{ margin: '0 20px' }}>
          <Input type="text" placeholder="조직도 검색" bsSize="small" />
          <OrganTree
            organ={this.state.organTree}
            defaultExpandedKeys={['D1', 'D2']} // Todo : 가져오는 로직 구현
            handleExpand={this.onExpand}
            handleSelect={this.onSelect}
          />
        </div>
      </Col>
    );
  }
}
