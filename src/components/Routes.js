import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedLogin from '../containers/ProtectedLogin';
import ProtectedRoute from '../containers/ProtectedRoute';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';

const Routes = () => (
  <Switch>
    <ProtectedLogin path="/login" component={Login} />
    <ProtectedRoute path="/" component={Dashboard} />
  </Switch>
);
export default Routes;
