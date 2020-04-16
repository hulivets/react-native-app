import React from 'react';
import { View, TouchableOpacity, InteractionManager } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../Icon';

export default function RoundButton({
    iconType,
    onPress,
    color,
    width,
    height,
    style,
}) {
    const handleOnPress = () => {
        if (!onPress) return;
        InteractionManager.runAfterInteractions(() => {
            onPress();
        });
    };

    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={styles.buttonWrapper(width, height, color, style)}>
                <Icon width={14} height={14} type={iconType} />
            </View>
        </TouchableOpacity>
    );
}

RoundButton.propTypes = {
    iconType: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    onPress: PropTypes.func,
    style: PropTypes.object,
};

RoundButton.defaultProps = {
    iconType: '',
    color: '#FFAC30',
    height: 48,
    width: 48,
    onPress: null,
    style: null,
};

const styles = {
    buttonWrapper: (w, h, c, style) => {
        return {
            ...style,
            justifyContent: 'center',
            alignItems: 'center',
            width: w,
            height: h,
            backgroundColor: c,
            borderRadius: 48,
        };
    },
};
