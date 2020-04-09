import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Avatar from '../Avatar';

export default function ProfileInfoCard({ userData }) {
    const { name, lastName, address } = userData;

    return (
        <View style={styles.container}>
            <Avatar name={name} />
            <View style={styles.textWrapper}>
                <Text style={styles.nameText}>
                    {name} {lastName}
                </Text>
                <Text style={styles.addressText}>{address}</Text>
            </View>
        </View>
    );
}

ProfileInfoCard.propTypes = {
    userData: PropTypes.object.isRequired,
};

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textWrapper: {
        marginLeft: 10,
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1B1D28',
    },
    addressText: {
        fontSize: 10,
        color: '#7B7F9E',
    },
};
