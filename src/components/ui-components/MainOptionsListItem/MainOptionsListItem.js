import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../Icon';

export default function MainOptionsListItem({ title, image, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.imageWrapper}>
                <Icon width={23} height={24} type={image} />
            </View>
            <Text style={styles.textTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

MainOptionsListItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    onPress: PropTypes.func,
};

MainOptionsListItem.defaultProps = {
    title: '',
    image: null,
    onPress: null,
};

const styles = {
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 12,
        backgroundColor: '#F1F3F6',
    },
    textTitle: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 11,
        lineHeight: 14,
        fontWeight: 'bold',
        color: '#7B7F9E',
    },
};
