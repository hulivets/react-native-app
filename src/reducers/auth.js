import { createReducer } from '@reduxjs/toolkit';

import { signIn, logOut } from '../actions/auth';

const INIT = {
    isSignIn: false,
    userData: {
        name: 'Carol',
        lastName: 'Black',
        address: 'Seatle, Washington',
    },
};

export const authReducer = createReducer(INIT, {
    [signIn]: state => {
        state.isSignIn = true;
        return state;
    },
    [logOut]: state => {
        state.isSignIn = false;
        return state;
    },
});
