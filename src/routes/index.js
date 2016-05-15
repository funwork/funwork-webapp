import React from 'react';
import { Route } from 'react-router';
import Main from '../components/Main';
import Login from '../components/login/Login';
import Organization from '../components/organization/Organization';
import Sns from '../components/sns/Sns';
import Sample from '../components/sample/Sample';

export default (
  <Route path="/" component={Main} >
    <Route path="/login" component={Login} />
    <Route path="/organization" component={Organization} />
    <Route path="/sns" component={Sns} />
    <Route path="/sample" component={Sample} />
  </Route>
);
