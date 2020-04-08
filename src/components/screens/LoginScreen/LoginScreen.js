import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import SvgUri from 'react-native-svg-uri';

import bgImage from '../../../assets/bg.svg';

import BlockWrapper from '../../ui-components/BlockWrapper';
import DateInfo from '../../ui-components/DateInfo';
import Icon from '../../ui-components/Icon';
import Button from '../../ui-components/Button';

const LoginScreen = ({ onSignIn }) => {
    const signIn = () => {
        onSignIn();
    };

    return (
        <View style={styles.loginScreen}>
            <View style={styles.bgImageWrapper}>
                <SvgUri svgXmlData={bgImage} style={styles.bgImage} />
            </View>
            <View style={styles.content}>
                <BlockWrapper>
                    <DateInfo />
                </BlockWrapper>
                <BlockWrapper>
                    <Icon width={60} height={40} type="logo" />
                    <Text style={styles.textTitle}>eWalle</Text>
                    <Text style={styles.textDescription}>
                        {`Open An Account For Digital
E-Wallet Solutions.Instant
Payouts.

Join For Free`}
                    </Text>
                </BlockWrapper>
                <BlockWrapper style={styles.buttonContent}>
                    <Button
                        width={190}
                        height={50}
                        icon="arrowRight"
                        title="Sign in"
                        onPress={signIn}
                    />
                    <Text style={styles.createAccountText}>
                        Create an account
                    </Text>
                </BlockWrapper>
            </View>
        </View>
    );
};

export default LoginScreen;

LoginScreen.propTypes = {
    onSignIn: PropTypes.func.isRequired,
};

const styles = {
    loginScreen: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF', //'#171822',
    },
    bgImageWrapper: {
        position: 'relative',
        width: 132,
        alignItems: 'flex-start',
        backgroundColor: '#CCCCCC',
    },
    bgImage: {
        position: 'absolute',
        top: 0,
        left: -68,
    },
    content: {
        //alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 30,
        paddingBottom: 50,
        justifyContent: 'space-between',
        color: '#FFFFFF',
    },
    textTitle: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 28,
        color: '#1B1D28',
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 14,
        color: '#7B7F9E',
        lineHeight: 20,
    },
    createAccountText: {
        //width: 190,
        textAlign: 'center',
        marginTop: 30,
        fontSize: 16,
        color: '#1B1D28',
    },
};
