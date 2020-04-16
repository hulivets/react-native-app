import { createReducer } from '@reduxjs/toolkit';

import { openPanelAction, closePanelAction } from '../actions/bottomPanel';

const INIT = {
    bottomPanel: {
        name: '',
        snapTo: 0,
    },
};

export const viewReducer = createReducer(INIT, {
    [openPanelAction]: (state, action) => {
        return {
            ...state,
            bottomPanel: {
                name: action.payload.name,
                snapTo: action.payload.snapTo || 0,
            },
        };
    },
    [closePanelAction]: state => {
        return {
            ...state,
            bottomPanel: {
                name: '',
                snapTo: 0,
            },
        };
    },
});
