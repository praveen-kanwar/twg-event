import firebase from 'firebase';

import C from '../config/constants';
import history from '../history/history';

// Auth actions.
export const listeningToAuth = () => {
    return {
        type: C.LISTENING_TO_AUTH
    };
};

export const loginRequest = (method = 'google', nextPath = '/') => {
    return {
        type: C.LOGIN_REQUEST,
        method,
        nextPath
    };
};

export const loginSuccess = (user, nextPath = '/') => {
    history.push(nextPath);
    return {
        type: C.LOGIN_SUCCESS,
        user,
        nextPath
    };
};

export const logout = (nextPath = '/') => {
    history.push(nextPath);
    return {
        type: C.LOGOUT,
        nextPath
    };
};

export const startListeningToAuth = () => {
    return function(dispatch) {
        dispatch(listeningToAuth());
        // Start listening to firebase auth changes.
        C.FIREBASE.auth().onAuthStateChanged(authData => {
            // If logged in.
            if (authData) {
                dispatch(loginSuccess(authData));
            } else {
                dispatch(logout());
            }
        });
    };
};

// Dialog actions.
export const showDialog = ({
    dialogType = 'info',
    noAction = null,
    noText = 'No',
    text,
    yesAction,
    yesText = 'Yes'
}) => {
    return {
        dialogType,
        noAction,
        noText,
        text,
        type: C.SHOW_DIALOG,
        yesAction,
        yesText
    };
};

export const clearDialog = () => {
    return {
        type: C.CLEAR_DIALOG
    };
};

// Data loading.
export const loadingData = () => {
    return {
        type: C.LOADING_DATA
    };
}

export const loadedData = () => {
    return {
        type: C.LOADED_DATA
    };
}
