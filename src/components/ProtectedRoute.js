/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (auth ? <Component /> : <Redirect to="/login" />)}
  />
);

ProtectedRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  component: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.userReducer.auth,
});

export default connect(mapStateToProps, {})(ProtectedRoute);
