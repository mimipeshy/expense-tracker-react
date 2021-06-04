import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedLogin from '../containers/ProtectedLogin';
import Login from '../containers/Login';

const Routes = () => (
  <Switch>
    <ProtectedLogin path="/login" component={Login} />
  </Switch>
);
export default Routes;
