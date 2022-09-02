import getAuthUserThunk from './auth-reduce';

const INIZIALIZATED = 'INIZIALIZATED';



let initialState = {
    initialInizializated: false,
};

const appReduce = (state = initialState, action) => {
    switch (action.type) {
        case INIZIALIZATED:
            return {
                ...state,
                initialInizializated: true,
            }
        default:
            return state;
    }
}

export const setInizializateApp = () => {
    return {
        type: INIZIALIZATED,
    }
}

export const setInizializateThunk = () => {
    return dispatch => {
        return getAuthUserThunk().then(dispatch(setInizializateApp));
    }
}

export default appReduce;