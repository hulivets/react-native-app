import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../ui-components/Header';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Accounts from '../../screens/Accounts';
import Transactions from '../../screens/Transactions';
import Stats from '../../screens/Stats';
import Settings from '../../screens/Settings';
import Help from '../../screens/Help';
import BottomPanelContainer from '../BottomPanelContainer/BottomPanelContainer';

const SCREEN_BY_NAME = {
    Home,
    Profile,
    Accounts,
    Transactions,
    Stats,
    Settings,
    Help,
};

export default function ScreenContainer({
    navigation,
    route,
    panelData,
    closeBottomPanel,
}) {
    const { name } = route;
    // eslint-disable-next-line curly
    if (!name) return;

    const handleOpenDrawer = () => navigation.openDrawer();
    const Screen = SCREEN_BY_NAME[name] || null;

    return (
        <View style={styles.screenContainer}>
            <Header onPress={handleOpenDrawer} />
            <Screen />
            <BottomPanelContainer
                panelData={panelData}
                onCloseEnd={closeBottomPanel}
            />
        </View>
    );
}

ScreenContainer.propTypes = {
    route: PropTypes.object,
};

ScreenContainer.defaultProps = {
    route: {},
};

const styles = {
    screenContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        //backgroundColor: '#F5FCFF',
    },
};
