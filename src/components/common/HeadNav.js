import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class HeadNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            Funwork
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={{ pathname: '/login' }}>
            <NavItem eventKey={1}>Login</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/organization' }}>
            <NavItem eventKey={2}>조직도</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/sns' }}>
            <NavItem eventKey={3}>SNS</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
