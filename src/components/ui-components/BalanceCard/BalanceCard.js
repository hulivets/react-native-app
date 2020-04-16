import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import RoundButton from '../RoundButton';

export default function BalanceCard({ userBalance, onPress }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.userBalanceText}>{userBalance}</Text>
                <Text style={styles.currentBalanceText}>Current balance</Text>
            </View>
            <RoundButton iconType="add" onPress={onPress} />
        </View>
    );
}

BalanceCard.propTypes = {
    userBalance: PropTypes.number,
};

BalanceCard.defaultProps = {
    userBalance: 20600,
};

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        backgroundColor: '#F1F3F6',
        borderRadius: 12,
    },
    userBalanceText: {
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#171822',
    },
    currentBalanceText: {
        fontSize: 12,
        color: '#3A4276',
    },
};
