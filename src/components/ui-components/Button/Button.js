import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from '../Icon';

export default function Button({
    width,
    height,
    icon,
    title,
    color,
    onPress,
    style,
}) {
    return (
        <TouchableOpacity
            style={styles.buttonContainer(width, height, color, style)}
            onPress={onPress}>
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.icon}>
                <Icon width={20} height={20} type={icon} fill="#212330" />
            </View>
        </TouchableOpacity>
    );
}

Button.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    icon: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
};

Button.defaultProps = {
    width: 190,
    height: 50,
    icon: null,
    title: '',
    color: '#FFAC30',
    onPress: null,
    style: {},
};

const styles = {
    buttonContainer: (w, h, c, style) => {
        return {
            ...style,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: w,
            height: h,
            borderRadius: 10,
            backgroundColor: c,
        };
    },
    textTitle: {
        fontSize: 16,
        color: '#212330',
    },
    icon: {
        width: 16,
        marginLeft: 5,
        marginTop: 3,
    },
};
