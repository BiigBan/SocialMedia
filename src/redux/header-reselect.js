import { createSelector } from "reselect";

const isAuth = (state) => {
    return state.auth.isAuthUser;
}

export const isAuthUser = createSelector(isAuth, (authUsert) => {
    return authUsert;
})

export const login = (state) => {
    return state.auth.login;
}