import React from 'react';
import { View, Text } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.screenContainer}>
            <Text>Profile</Text>
        </View>
    );
}

const styles = {
    screenContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
    },
};
