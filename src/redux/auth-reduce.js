import { authAPI, userAPI } from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';
const LOGOUT = 'LOGOUT';
const CAPTCHA = 'CAPTCHA';



let initialState = {
    email: null,
    id: null,
    userId: null,
    login: null,
    isAuthUser: false,
    captcha: undefined,
};

const authReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuthUser: action.data.id ? true : false,
            }
        case LOGOUT:
            return {
                ...state,
                ...action.data,
            }
        case CAPTCHA:
            return {
                ...state,
                captcha: action.captchaText,
            }
        default:
            return state;
    }
}

export const setAuthUser = (data) => {
    return {
        type: SET_AUTH_USER,
        data,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        data: {
            email: null,
            id: null,
            userId: null,
            login: null,
            isAuthUser: false,
        }
    }
}

export const captchaAC = (captchaText) => {
    return {
        type: CAPTCHA,
        captchaText
    }
}

export const getAuthUserThunk = () => {
    return async (dispatch) => {
        let data = await userAPI.getAuthUser()

        dispatch(setAuthUser(data))

    }
}

export const loginThunk = (email, password, rememberMe, captcha, setStatus) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            userAPI.getAuthUser().then(
                data => {
                    dispatch(setAuthUser(data))
                }
            )
        } else if (response.data.resultCode === 10) {
            authAPI.security().then(
                data => {
                    dispatch(captchaAC(data))
                }
            )
            setStatus(response.data.messages)
        } else {
            setStatus(response.data.messages)
        }
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then(
            dispatch(logout())
        )
    }
}

// export const captcha = () => {
//     return (dispatch) => {
//         authAPI.security().then(
//             data => {
//                 dispatch(captchaAC(data))
//             }
//         )
//     }
// }

export default authReduce;