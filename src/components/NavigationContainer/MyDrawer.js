import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NAMES } from '../../constants/screenNames';

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
            {NAMES.map(screen => (
                <Drawer.Screen
                    key={screen.id}
                    name={screen.name}
                    component={ScreenContainer}
                />
            ))}
        </Drawer.Navigator>
    );
}

const styles = {
    drawerStyle: {
        width: '100%',
        backgroundColor: '#F1F3F6',
    },
};
