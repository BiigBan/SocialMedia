import getAuthUserThunk, { setAuthUser } from './auth-reduce';
import { setProfileUser } from './profile-reduce';

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
        // return getAuthUserThunk().then(dispatch(setInizializateApp));
        //1 При обновении страницы - не успевает прийти promise profileUser =>идет заспрос "/profile/null"
        return Promise.all([getAuthUserThunk, setAuthUser, setProfileUser]).then(dispatch(setInizializateApp));
        // setProfileUser
        
    }
}

export default appReduce;