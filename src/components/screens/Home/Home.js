import React from 'react';
import { View } from 'react-native';

import BlockWrapper from '../../ui-components/BlockWrapper';
import BalanceCard from '../../ui-components/BalanceCard';
import ContactsList from '../../ui-components/ContactsList';
import MainOptionsList from '../../ui-components/MainOptionsList';

export default function Home({ navigation, route }) {
    return (
        <View style={styles.screenContainer}>
            <BlockWrapper
                title="Account Overview"
                style={styles.commonBlockStyle}>
                <BalanceCard />
            </BlockWrapper>
            <BlockWrapper
                title="Send Money"
                icon="cardScanner"
                titleWrapper={styles.blockTittleWrapper}>
                <ContactsList />
            </BlockWrapper>
            <BlockWrapper
                title="Services"
                icon="settings"
                style={styles.optionsWrapper}>
                <MainOptionsList />
            </BlockWrapper>
        </View>
    );
}

const styles = {
    screenContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    commonBlockStyle: {
        marginLeft: 15,
        marginRight: 15,
    },
    blockTittleWrapper: {
        marginLeft: 15,
        marginRight: 15,
    },
    optionsWrapper: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
};
