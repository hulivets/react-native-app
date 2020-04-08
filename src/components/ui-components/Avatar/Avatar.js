import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default function Avatar({ name, image, width, height, color }) {
    return (
        <View style={styles.container(width, height, color, image)}>
            {image ? (
                <Icon width={width} height={height} type={image} />
            ) : (
                <Text style={styles.nameText}>{name.slice(0, 1)}</Text>
            )}
        </View>
    );
}

Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};

Avatar.defaultProps = {
    image: null,
    width: 46,
    height: 46,
    color: '#D8D9E4',
};

const styles = {
    container: (w, h, c, img) => {
        return {
            justifyContent: img ? 'flex-end' : 'center',
            alignItems: 'center',
            width: w + 10,
            height: h + 10,
            borderRadius: w,
            borderWidth: 2,
            borderColor: '#D8D9E4',
            backgroundColor: '#FFFFFF',
            color: c,
            overflow: 'hidden',
        };
    },
    nameText: {
        fontSize: 26,
        color: '#3A4276',
    },
};
