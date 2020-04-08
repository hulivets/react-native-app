import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default function DrawerContent({ state, navigation }) {
    return (
        <View><Text>dddd</Text></View>
    )
}

DrawerContent.propTypes = {
    state: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};
