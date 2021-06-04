import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import '../styles/App.css';

function App() {
  return (
    <>
    </>
  );
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = () => ({
  fetchUsers,
});

export default connect(mapStateToProps, mapDispatchToProps())(App);