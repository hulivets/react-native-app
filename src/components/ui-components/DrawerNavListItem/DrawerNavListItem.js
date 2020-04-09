import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function DrawerNavListItem({
    name,
    navigate,
    activeScreenIndex,
    routeIndex,
}) {
    const handleNavigate = () => {
        navigate(name);
    };

    const activeNavStyle = {
        borderLeftWidth: 4,
        borderColor: '#FFAC30',
    };
    const activeNavTextStyle = { fontWeight: 'bold' };

    const activeNavItem =
        activeScreenIndex === routeIndex ? activeNavStyle : null;
    const activeNavItemText =
        activeScreenIndex === routeIndex ? activeNavTextStyle : null;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navNameContainer(activeNavItem)}>
                <Text
                    style={styles.navNameText(activeNavItemText)}
                    onPress={handleNavigate}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        marginBottom: 20,
    },
    navNameContainer: activeStyles => {
        return {
            ...activeStyles,
            width: '100%',
        };
    },
    navNameText: activeStyle => {
        return {
            ...activeStyle,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 30,
            fontSize: 18,
            color: '#1B1D28',
        };
    },
};
