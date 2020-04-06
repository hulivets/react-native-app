/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { Text, View, Button } from 'react-native';

import { store } from './store';

import LoginScreen from './components/screens/LoginScreen';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View
            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Feed"
                onPress={() => navigation.navigate('Feed')}
            />
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Drawer.Navigator
                    initialRouteName="Sign In"
                    drawerStyle={{
                        backgroundColor: '#c6cbef',
                        width: 200,
                    }}>
                    <Drawer.Screen name="Sign In" component={LoginScreen} />
                </Drawer.Navigator>
            </Provider>
        </NavigationContainer>
    );
};

export default App;
