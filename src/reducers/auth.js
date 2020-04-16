import { createReducer } from '@reduxjs/toolkit';

import { signIn, logOut } from '../actions/auth';

const INIT = {
    isSignIn: false,
    userData: {
        name: 'Carol',
        lastName: 'Black',
        address: 'Seatle, Washington',
    },
    contactsData: [
        {
            id: 1,
            name: 'Mike',
            image: 'avatar1',
        },
        {
            id: 2,
            name: 'Joshpeh',
            image: 'avatar1',
        },
        {
            id: 3,
            name: 'Ashley',
            image: '',
        },
    ],
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
