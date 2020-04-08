import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenContainer from '../containers/ScreenContainer';
import DrawerContent from '../ui-components/DrawerContent';

const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
//     console.log(props)
//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem label="Help" onPress={() => alert('Link to help')} />
//         <DrawerItem label="Loh" onPress={() => alert('Link to help')} />
//       </DrawerContentScrollView>
//     );
// }

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerPosition="right"
            drawerStyle={styles.drawerStyle}
            drawerContent={DrawerContent}>
            <Drawer.Screen name="Home" component={ScreenContainer} />
            <Drawer.Screen name="Profile" component={ScreenContainer} />
        </Drawer.Navigator>
    );
}

const styles = {
    drawerStyle: {
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
};
