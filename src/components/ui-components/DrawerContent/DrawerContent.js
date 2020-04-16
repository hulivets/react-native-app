import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import { appVersion } from '../../../constants/common';

import DrawerNavList from '../DrawerNavList';
import ProfileInfoCard from '../ProfileInfoCard';
import Home from '../../screens/Home';
import Icon from '../Icon';
import Header from '../Header';

export default function DrawerContent({
    state,
    navigation,
    userData,
    onLogOut,
}) {
    const handleCloseDrawer = () => navigation.closeDrawer();
    const handleLogOut = () => onLogOut();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileInfoWrapper}>
                    <ProfileInfoCard userData={userData} />
                </View>
                <TouchableOpacity
                    style={styles.closeIcon}
                    onPress={handleCloseDrawer}>
                    <Icon type="close" />
                </TouchableOpacity>
            </View>
            <View style={styles.navLinks}>
                <DrawerNavList state={state} navigation={navigation} />
            </View>
            <View style={styles.imageWrapper} pointerEvents="none">
                <View style={styles.image}>
                    <Header />
                    <Home />
                </View>
            </View>
            <TouchableOpacity
                style={styles.logOutWrapper}
                onPress={handleLogOut}>
                <Icon type="logOut" onPress={handleCloseDrawer} />
                <Text style={styles.logOutText}>Logout</Text>
            </TouchableOpacity>
            <Text style={styles.appVersionText}>Version {appVersion}</Text>
        </View>
    );
}

DrawerContent.propTypes = {
    state: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired,
    onLogOut: PropTypes.func.isRequired,
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        position: 'relative',
    },
    navLinks: {
        width: 150,
    },
    imageWrapper: {
        position: 'absolute',
        top: 90,
        right: -200,
        width: 350,
        height: 550,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        transform: [{ rotateZ: '-15deg' }],
        backgroundColor: '#FFFFFF',
    },
    image: {
        flex: 1,
        left: -30,
        top: -50,
        transform: [{ scale: 0.8 }],
    },
    profileInfoWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: 100,
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 40,
    },
    closeIcon: {
        position: 'absolute',
        top: 30,
        right: 30,
    },
    logOutWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
    },
    logOutText: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1B1D28',
    },
    appVersionText: {
        marginLeft: 30,
        marginBottom: 20,
        fontSize: 10,
        color: '#3A4276',
    },
};
