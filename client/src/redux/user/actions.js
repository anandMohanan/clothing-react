import  userActionTypes  from './types';

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload:user
});

export const googleSignInStart = () =>  ({
    type: userActionTypes.GOOGLE_SIGNIN_START
});

export const signInSuccess = user => ({
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: userActionTypes.SIGNIN_FAILURE,
    payload: error
});

export const emailSignInStart = emailAndPassword =>  ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: userActionTypes.SIGNOUT_START
});


export const signOutSuccess = () => ({
    type: userActionTypes.SIGNOUT_SUCCESS
})

export const signOutFailure = error => ({
    type: userActionTypes.SIGNOUT_FAILURE,
    payload: error
});

export const signUpStart = userCredentials => ({
    type: userActionTypes.SIGNUP_START,
    payload: userCredentials
});


export const signUpSuccess = ({ user , additionalData }) => ({
    type: userActionTypes.SIGNUP_SUCCESS,
    payload: {user , additionalData}
})

export const signUpFailure = error => ({
    type: userActionTypes.SIGNUP_FAILURE,
    payload: error
})


