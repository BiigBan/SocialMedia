import { profileStatusAPI, userAPI } from "../api/api";


const NEW_MESSAGE_POST = 'NEW-MESSAGE-POST';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET-PROFILE-USER';
const CHANGE_CURRENT_USER_ID = 'CHANGE-CURRENT-USER-ID';
const CHANGE_USER_ID = 'CHANGE_USER_ID';
const GET_STATUS = 'GET_STATUS';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    user: {
        fullName: 'Denis Th',
        aboutMe: 'Heyy, it`s my new profile',
        contacts: {
            facebook: 'facebook.com',
            instagram: 'instagram.com',
            twitter: 'twitter.com',
            github: 'github.com',
        },
        photos: {
            small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO4MHTpDqZpz63MDWC05Oy3KOOXTmh9Z70w&usqp=CAU",
            large: 'https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg'
        }
    },
    postData: [
        {
            message: 'Hi, it`s my first post',
            name: 'Dima',
            likecount: '20'
        },
        {
            message: 'How are you? I didn`t hear you last 2 weeks',
            name: 'Egor',
            likecount: '12'
        },
        {
            message: 'Finally, I bought a new bike',
            name: 'Alina',
            likecount: '25'
        },
        {
            message: 'Today my cat is dead',
            name: 'Sasha',
            likecount: '22'
        },
    ],
    currentText: '',
    currentProfileUserId: undefined,
    profileUser: null,
    status: '',
};

const profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE_POST:
            return {
                ...state,
                currentText: action.text,
            }
        case ADD_POST: {
            let user = {
                name: state.user.name,
                message: action.text,
                likecount: 0,
            }
            return {
                ...state,
                postData: [...state.postData, user],
                currentText: '',
            }
        }
        case SET_PROFILE_USER:
            return {
                ...state,
                profileUser: action.profile,
            }
        case CHANGE_CURRENT_USER_ID:
            return {
                ...state,
                currentProfileUserId: action.id,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}
export const newMessagePost = (text) => {
    return { type: NEW_MESSAGE_POST, text: text };
}

export const addPost = (text) => {
    return { type: ADD_POST, text: text };
}

export const setProfileUser = (profile) => {
    return { type: SET_PROFILE_USER, profile }
}

export const changeCurrentProfileUserId = (id) => {
    return { type: CHANGE_CURRENT_USER_ID, id }
}

export const setStatus = (status) => {
    return { type: SET_STATUS, status }
}


export const getProfileUserThunk = (id = 25271) => {
    return async (dispatch) => {
        if (id === 0) {
        } else {

            let data = await userAPI.getProfileUser(id)
            dispatch(setProfileUser(data));

            let string = await profileStatusAPI.getStatus(id)
            dispatch(setStatus(string))
        }
    }
}

export const setStatusThunk = (status) => {
    return (dispatch) => {
        profileStatusAPI.updateStatus(status).then(
            // data => {
            //     dispatch(setStatus(data));
            // }
        )
    }
}

export const getStatusThunk = (id) => {
    return dispatch => {

    }
}

export const updateProfile = (info, photo, setStatus) => {
    return dispatch => {
        profileStatusAPI.updateProfile(info).then(
            response => {
                let result = response.data.resultCode;
                if(result === 1){
                    console.log(response.data.messages);
                    setStatus(response.data.messages)
                    
                }
            }
        )
        profileStatusAPI.updatePhoto(photo).then (
            response => {
            }
        )
    }
}

export default profileReduce;