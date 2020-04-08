import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const BlockWrapper = ({
    title,
    icon,
    children,
    iconWidth,
    iconHeight,
    style,
    titleWrapper,
    onPress,
}) => {
    return (
        <View style={styles.container(style)}>
            {title ? (
                <View style={styles.titleWrapper(titleWrapper)}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <TouchableOpacity onPress={onPress}>
                        <Icon
                            width={iconWidth}
                            height={iconHeight}
                            type={icon}
                        />
                    </TouchableOpacity>
                </View>
            ) : null}
            {children}
        </View>
    );
};

export default BlockWrapper;

const styles = {
    container: style => {
        return { ...style };
    },
    textTitle: {
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3A4276',
    },
    titleWrapper: extendedStyle => {
        return {
            ...extendedStyle,
            flexDirection: 'row',
            justifyContent: 'space-between',
        };
    },
};

BlockWrapper.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    iconWidth: PropTypes.number,
    iconHeight: PropTypes.number,
    children: PropTypes.children,
    style: PropTypes.object,
    titleWrapper: PropTypes.object,
    onPress: PropTypes.func,
};

BlockWrapper.defaultProps = {
    title: '',
    icon: '',
    iconWidth: 24,
    iconHeight: 24,
    children: null,
    style: {},
    titleWrapper: {},
    onPress: null,
};
