/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, fetchUsers } from '../actions';

const Login = ({ login, users, fetchUsers }) => {
  React.useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
    }, []);

  const onLogin = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
      const userObj = users.filter(
        (u) => u.username.toLowerCase() === username.toLowerCase(),
      )[0];
      if (userObj) {
        login(userObj, username);
      } else {
        login(userObj, username);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Please enter your username');
    }
  };

  return (
    <div className="login-container">
      <form>
        {users[0] && <label htmlFor="username">Username: </label>}
        {users[0] && <input type="text" id="username" />}
        {users[0] ? (
          <button type="submit" onClick={onLogin}>
            Login
          </button>
        ) : (
          'Loading...'
        )}
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(Object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = () => ({
  login,
  fetchUsers,
});

export default connect(mapStateToProps, mapDispatchToProps())(Login);
