const actions = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',

    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAILED: 'SIGNUP_FAILED',

    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILED: 'LOGOUT_FAILED',

    loginSuccess: (data: Object) => {
        return {
            type: actions.LOGIN_SUCCESS,
            data
        }
    },

    loginFailed: (err: Object) => {
        return {
            type: actions.LOGIN_FAILED,
            err
        }
    },

    signupSuccess: (data: Object) => {
        return {
            type: actions.SIGNUP_SUCCESS,
            data
        }
    },

    signupFailed: (err: Object) => {
        return {
            type: actions.SIGNUP_FAILED,
            err
        }
    },

    logoutSuccess: () => {
        return {
            type: actions.LOGOUT_SUCCESS,
            data: { isLoggedIn: false },
        }
    },

    logoutFailed: () => {
        return {
            type: actions.LOGOUT_FAILED,
            data: { isLoggedIn: false },
        }
    }
}

export default actions;

