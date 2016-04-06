import React from 'react';
import { Route } from 'react-router';
import Main from '../components/Main';
import Login from '../components/login/Login';

export default (
  <Route path="/" component={Main} >
    <Route path="/login" component={Login} />
  </Route>
);
