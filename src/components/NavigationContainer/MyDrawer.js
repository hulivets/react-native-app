import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenContainer from '../containers/ScreenContainer';
import DrawerContent from '../ui-components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerPosition="right"
            drawerStyle={styles.drawerStyle}
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={ScreenContainer} />
            <Drawer.Screen name="Profile" component={ScreenContainer} />
            <Drawer.Screen name="Accounts" component={ScreenContainer} />
            <Drawer.Screen name="Transactions" component={ScreenContainer} />
            <Drawer.Screen name="Stats" component={ScreenContainer} />
            <Drawer.Screen name="Settings" component={ScreenContainer} />
            <Drawer.Screen name="Help" component={ScreenContainer} />
        </Drawer.Navigator>
    );
}

const styles = {
    drawerStyle: {
        width: '100%',
        backgroundColor: '#F1F3F6',
    },
};
