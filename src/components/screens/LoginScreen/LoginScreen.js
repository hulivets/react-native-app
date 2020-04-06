import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import BlockWrapper from '../../ui-components/BlockWrapper';
import DateInfo from '../../ui-components/DateInfo';

const bgImage = '../../../assets/sign_in_bg.png';

const LoginScreen = () => {
    return (
        <View style={styles.loginScreen}>
            <ImageBackground
                style={styles.bgImageWrapper}
                source={require(bgImage)}
            />
            {/* <View style={styles.bgImageWrapper}>
                <SvgUri
                    width="135"
                    source={require(bgImage)}
                    style={styles.bgImage}
                />
            </View> */}
            <View style={styles.content}>
                <View style={styles.dateInfo}>
                    <BlockWrapper>
                        <DateInfo />
                    </BlockWrapper>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = {
    loginScreen: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF', //'#171822',
    },
    bgImageWrapper: {
        width: 135,
    },
    content: {
        alignItems: 'center',
        //justifyContent: 'center',
        color: '#FFFFFF',
    },
    dateInfo: {
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 15,
    },
};
