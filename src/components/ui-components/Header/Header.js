import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../Icon';

export default function Header({ onPress }) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.logoWrapper}>
                <Icon width={47} height={31} type="logo" />
                <Text style={styles.textLogo}>eWallet</Text>
            </View>
            <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
                <Icon width={19} height={19} type="menu" />
            </TouchableOpacity>
        </View>
    );
}

Header.propTypes = {
    onPress: PropTypes.func,
};

Header.defaultProps = {
    onPress: null,
};

const styles = {
    headerContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textLogo: {
        marginLeft: 8,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1B1D28',
    },
    menuIcon: {
        alignItems: 'center',
    },
};
