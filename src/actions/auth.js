import { createAction } from '@reduxjs/toolkit';

export const signIn = createAction('signIn');

export function onSignIn() {
    return async dispatch => {
        await dispatch(signIn());
    };
}

export const logOut = createAction('logOut');

export function onLogOut() {
    return dispatch => {
        dispatch(logOut());
    };
}
