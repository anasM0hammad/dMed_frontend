import actions from "./actions";
import { Action } from "../store";

const initState = {
    isLoggedIn: false,
    accessToken: null,
    role: null,
    address: null,
    err: null
};

const AuthReducer = (state = initState, action: Action) => {
    const { type, data, err } = action;
    switch(type){
        case actions.LOGIN_SUCCESS: 
            return {
                ...state,
                ...data,
                loading: false
            };
        
        case actions.LOGIN_FAILED:
            return {
                ...state,
                err,
                loading: false
            }

        case actions.SIGNUP_SUCCESS:
            return {
                ...state,
                ...data,
                loading: false,
            }
        
        case actions.SIGNUP_FAILED:
            return {
                ...state,
                err,
                loading: false
            }
        
        default: 
            return state
    }
};

export default AuthReducer;