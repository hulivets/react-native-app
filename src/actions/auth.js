import { createAction } from '@reduxjs/toolkit';

export const signIn = createAction('signIn');

export function onSignIn() {
    return dispatch => {
        dispatch(signIn());
    };
}
