import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from '../components/Routes';
import { fetchUsers } from '../actions';
import Header from '../components/Header';
import './styles/index.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = () => ({
  fetchUsers,
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
