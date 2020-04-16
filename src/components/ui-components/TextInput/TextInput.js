import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Input() {
    return (
        <View>
            <TextInput style={styles.textInput} />
        </View>
    );
}

const styles = {
    textInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
    },
};
