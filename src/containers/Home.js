import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Home({ user }) {
  return (
    <div className="home-container">
      <h1>
        Welcome
        { user.username }
      </h1>
      <h3>
        &quot;Beware of little expenses.A small leak will sink a great
        ship&quot; - Benjamin Franklin
      </h3>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps())(Home);
