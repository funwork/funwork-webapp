import React, { Component, PropTypes } from 'react';
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';

export default class OrganTree extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const lb = (data) => {
      return data.map(item => {
        if (item.children) {
          return (<TreeNode key={item.key} title={item.title} info={item.info} >
            {lb(item.children)}
          </TreeNode>);
        }
        return <TreeNode key={item.key} title={item.title} info={item.info} />;
      });
    };

    return (
      <Tree
        className="organTree"
        showLine
        expandedKeys={this.props.defaultExpandedKeys}
        onSelect={this.props.handleSelect}
      >
        {lb(this.props.organ)}
      </Tree>
    );
  }
}

OrganTree.propTypes = {
  defaultExpandedKeys: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  organ: PropTypes.array.isRequired
};
