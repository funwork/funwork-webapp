import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Input, Col } from 'react-bootstrap';
import OrganTree from './OrganTree';
import faker from './fakerServer';

export default class Organization extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organTree: [],
      defaultExpandedKeys: []
    };
  }

  componentDidMount() {
    this.loadOrganTreeFromServer();
  }

  loadOrganTreeFromServer() {
    this.setState({
      organTree: faker.getTreeData()
    }, () => {
      this.setDefaultExpandedKeys();
    });
  }

  setDefaultExpandedKeys() {
    const organTree = this.state.organTree;
    let userDeptId = faker.getLoginUser().deptId;

    const defaultExpandedKeys = [];
    const filter = (tree) => tree.map(item => {
      if (!userDeptId) {
        return false;
      }
      if (item.info.id === userDeptId) {
        defaultExpandedKeys.unshift(item.key);
        userDeptId = item.info.parentDeptId;
        return filter(organTree);
      }
      if (item.children) {
        return filter(item.children);
      }
    });

    filter(organTree);
    this.setState({ defaultExpandedKeys });
  }

  @autobind
  onSelect(selectedKeys, info) {
    this.setState({
      selectOrgan: info.node.props.info
    });
  }

  render() {
    return (
      <Col xs={3}>
        <div style={{ margin: '0 20px' }}>
          <Input type="text" placeholder="조직도 검색" bsSize="small" />
          <OrganTree
            organ={this.state.organTree}
            defaultExpandedKeys={this.state.defaultExpandedKeys}
            handleSelect={this.onSelect}
          />
        </div>
      </Col>
    );
  }
}
