import React from 'react';
import PropTypes from 'prop-types';

import LoginScreen from '../screens/LoginScreen';
import MyDrawer from '../NavigationContainer';

const AppContainer = ({ isSignIn }) => {
    return isSignIn ? <MyDrawer /> : <LoginScreen />;
};

export default AppContainer;

AppContainer.propTypes = {
    isSignIn: PropTypes.bool.isRequired,
};
