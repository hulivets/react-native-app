/* eslint-disable curly */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import IncreaseBalance from '../../bottomPanels/IncreaseBalance';

export default function BottomPanelContainer({ panelData, onCloseEnd }) {
    const { name, snapTo } = panelData;
    const PANELS_BY_NAME = {
        increaseBalance: IncreaseBalance,
    };

    const renderContent = () => {
        const Panel = PANELS_BY_NAME[name];

        return (
            <View style={styles.contentContainer}>
                <Panel />
            </View>
        );
    };

    if (!name) return null;

    return (
        <BottomSheet
            snapPoints={[200, 400, 200, 0]}
            initialSnap={0}
            snapTo={snapTo}
            //renderHeader={renderHeader}
            renderContent={renderContent}
            onCloseEnd={onCloseEnd}
            springConfig={{
                duration: 2000,
            }}
        />
    );
}

IncreaseBalance.propTypes = {
    panelData: PropTypes.object,
};

IncreaseBalance.defaultProps = {
    panelData: {},
};

const styles = {
    contentContainer: {
        height: 400,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        // marginLeft: 15,
        // marginRight: 15,
        backgroundColor: '#F1F3F6',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
};
