import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../ui-components/Header';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

const SCREEN_BY_NAME = {
    Home,
    Profile,
};

export default function ScreenContainer({ navigation, route }) {
    const { name } = route;
    if (!name) return;
    const handleOpenDrawer = () => navigation.openDrawer();
    const Screen = SCREEN_BY_NAME[name] || null;

    return (
        <View style={styles.screenContainer}>
            <Header onPress={handleOpenDrawer} />
            <Screen />
        </View>
    );
}

ScreenContainer.propTypes = {
    route: PropTypes.object,
};

ScreenContainer.defaultProps = {
    route: {},
};

const styles = {
    screenContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
};
