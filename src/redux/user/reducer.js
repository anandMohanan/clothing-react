import  userActionTypes  from './types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE,action) => {
        switch(action.type){
            case userActionTypes.SIGNIN_SUCCESS:
                return{
                    ...state,
                    currentUser:action.payload,
                    error: null
                };
                case userActionTypes.SIGNOUT_SUCCESS:
                    return{
                        ...state,
                        currentUser:null,
                        error: null
                    }
                case userActionTypes.SIGNIN_FAILURE:
                case userActionTypes.SIGNOUT_FAILURE:
                case userActionTypes.SIGNUP_FAILURE:
                    return{
                        ...state,
                        error: action.payload
                    }
            default:
                return state;
        }
}

export default userReducer;