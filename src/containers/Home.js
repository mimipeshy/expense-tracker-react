/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Home({ user }) {
    return (
        <div className="home-container">
            <h1>Welcome {user.username.toUpperCase()}</h1>
            <h3>
                &quot;One of the best tests of a trader is what they do when the markets
                are closed&quot; - Brett Steenbarger
      </h3>
        </div>
    );
}

Home.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = state => ({
    user: state.userReducer.user,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps())(Home);