import React from 'react';
import { View } from 'react-native';

import { MAIN_SCREEN_OPTIONS } from '../../../constants/common';

import MainOptionsListItem from '../MainOptionsListItem';

export default function MainOptionsList() {
    return (
        <View style={styles.container}>
            {MAIN_SCREEN_OPTIONS.map(item => (
                <MainOptionsListItem
                    key={item.id}
                    title={item.title}
                    image={item.image}
                />
            ))}
        </View>
    );
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
};
