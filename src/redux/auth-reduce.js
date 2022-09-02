import { authAPI, userAPI } from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';
const LOGOUT = 'LOGOUT';



let initialState = {
    email: null,
    id: null,
    userId: null,
    login: null,
    isAuthUser: false,
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

export const getAuthUserThunk = () => {
    return async (dispatch) => {
        let data = await userAPI.getAuthUser()

        dispatch(setAuthUser(data))

    }
}

export const loginThunk = (email, password, rememberMe, setStatus) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            userAPI.getAuthUser().then(
                data => {
                    dispatch(setAuthUser(data))
                }
            )
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

export default authReduce;