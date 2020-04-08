import { createReducer } from '@reduxjs/toolkit';

import { signIn } from '../actions/auth';

const INIT = {
    isSignIn: false,
};

export const authReducer = createReducer(INIT, {
    [signIn]: state => {
        state.isSignIn = true;
        return state;
    },
});
