import { createReducer, createAction } from '@reduxjs/toolkit';

const action = createAction('action');

// function testAction() {
//     dispatch => {
//         dispatch(action());
//     };
// }

const INIT = {
    isLoading: false,
    cashBalance: 1000,
};

export const rootReducer = createReducer(INIT, {
    [action]: state => {
        state.isLoading = true;
        return state;
    },
});
