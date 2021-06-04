import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedLogin from './ProtectedLogin';
import Login from './Login';

const Routes = () => (
  <Switch>
    <ProtectedLogin path="/login" component={Login} />
  </Switch>
);
export default Routes;
