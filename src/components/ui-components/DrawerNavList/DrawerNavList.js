import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DrawerNavListItem from '../DrawerNavListItem';

export default function DrawerNavList({ state, navigation }) {
    const { routes, index } = state;
    return (
        <View style={styles.container}>
            {routes.map((route, routeIndex) => (
                <DrawerNavListItem
                    key={route.key}
                    activeScreenIndex={index}
                    routeIndex={routeIndex}
                    name={route.name}
                    navigate={navigation.navigate}
                />
            ))}
        </View>
    );
}

DrawerNavList.propTypes = {
    state: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

const styles = {
    container: {
    },
};
