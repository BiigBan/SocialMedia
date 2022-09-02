import { userAPI } from "../api/api";

const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT-PAGE';
const ALL_PAGE = 'ALL-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const CHOSED_USER = 'CHOSED-USER';
const USER_ID = 'USER-ID';
const CURRENT_PORTION = 'CURRENT_PORTION';



let initialState = {
    users: [

    ],
    currentPage: 1,
    visibleCount: 5,
    allPage: 1,
    totalCount: 0,
    isFetching: true,
    // chosedUser: false,
    userId: undefined,
    currentPortion: null,
};

const userReduce = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state,
                userId: action.userId,
                users: [...state.users],
                follow: [...state.users].map(el => el.id === action.userId ? el.followed = !action.follow : el.followed),
                // follow: [...state.users] = !action.follow,
                // follow: [...state.users][action.userId - 1].follow = !action.follow,
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users] // [...state.users, ...action.users] 
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count,
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: +action.page,
            }
        case ALL_PAGE:
            return {
                ...state,
                allPage: action.allPage
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case USER_ID:
            return {
                ...state,
                userId: action.userId,
            }
        case CURRENT_PORTION:
            return {
                ...state,
                currentPortion: action.currentPortion,
            }
        default:
            return state;
    }
}

export const followToggleAC = (follow, userId) => {
    return {
        type: FOLLOW_TOGGLE,
        userId,
        follow
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export const setTotalCountAC = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        count,
    }
}


export const currentPageAC = (page) => {
    return {
        type: CURRENT_PAGE,
        page,
    }
}

export const allPageAC = (allPage) => {
    return {
        type: ALL_PAGE,
        allPage,
    }
}

export const toggleFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching,
    }
}

// export const chosedUser = (chosedUser) => {
//     return {
//         type: CHOSED_USER,
//         chosedUser
//     }
// }

export const userId = (userId) => {
    return {
        type: USER_ID,
        userId
    }
}

export const currentPortion = (currentPortion) => {
    return {
        type: CURRENT_PORTION,
        currentPortion
    }
}

export const getUsersThunk = (currentPageNum, visibleCount) => {
    return (dispatch) => {
        dispatch(toggleFetchingAC(true));
        userAPI.getUsers(currentPageNum, visibleCount).then(data => {
            dispatch(currentPageAC(currentPageNum))
            dispatch(setUsersAC(data.items));
            dispatch(setTotalCountAC(data.totalCount));
            dispatch(toggleFetchingAC(false));
        })
    }
}

export const followUserPost = (follow, id) => {
    return dispatch => {
        userAPI.followUserPost(id).then(response => {
            console.log(response.resultCode);
            if (response.resultCode === 0) {
                console.log(follow);
                dispatch(followToggleAC(follow, id));
            }
        }
        )
    }
}

export const followUserDelete = (follow, id) => {
    return dispatch => {
        userAPI.followUserDelete(id).then(
            response => {
                console.log('click');
                if (response.resultCode === 0) {
                    dispatch(followToggleAC(follow, id));
                }
            }
        )
    }
}

export default userReduce;