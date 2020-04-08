import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { store } from './store';

import AppContainer from './components/containers';

const App = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </NavigationContainer>
    );
};

export default App;
