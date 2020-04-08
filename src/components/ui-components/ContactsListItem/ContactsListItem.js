import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';

export default function ContactsListItem({ name, image }) {
    return (
        <View style={styles.container}>
            <Avatar image={image} name={name} />
            <Text>{name}</Text>
        </View>
    );
}

ContactsListItem.propTypes = {
    name: PropTypes.string,
};

ContactsListItem.defaultProps = {
    name: '',
    image: '',
};

const styles = {
    container: {
        width: 100,
        height: 120,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F1F3F5',
        borderRadius: 12,
    },
};
