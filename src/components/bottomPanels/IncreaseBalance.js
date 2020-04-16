import React from 'react';
import { View, Text } from 'react-native';

import TextInput from '../ui-components/TextInput';
import BlockWrapper from '../ui-components/BlockWrapper';
import Button from '../ui-components/Button/Button';

export default function IncreaseBalance() {
    return (
        <View>
            <BlockWrapper title="Increase the balance">
                <View style={styles.container}>
                    <View style={styles.textInput}>
                        <TextInput />
                    </View>
                    <Button title="Next" style={styles.button} />
                </View>
            </BlockWrapper>
        </View>
    );
}

const styles = {
    container: {
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        marginLeft: 15,
        marginRight: 15,
    },
    button: {
        marginTop: 15,
    },
};
