import React from 'react';
import { View } from 'react-native';

const BlockWrapper = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

export default BlockWrapper;

const styles = {
    container: {},
};
