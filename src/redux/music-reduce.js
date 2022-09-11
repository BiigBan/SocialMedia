import { musicAPI } from "../api/api";

const SET_TRACKS = 'SET_TRACKS';
const SET_ARTIST = 'SET_ARTIST';

const initialState = {
    tracks: [],
    artist: null
}

const musicReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRACKS:
            return {
                ...state,
                tracks: action.tracks
            }
            case SET_ARTIST: 
            return {
                ...state,
                artist: action.data,
            }
    
        default:
            return state;
    }
}

export const getMusicAC = (tracks) => {
    return {type: SET_TRACKS, tracks}
}

export const setArtistAC = (data) => {
    return {type: SET_ARTIST, data}
}

export const getMusic = () => {
    return dispatch => {
        musicAPI.getTracks().then(
            items => dispatch(getMusicAC(items))
        )
    }
}

export const findUser = (text) => {
    return dispatch => {
        musicAPI.findArtist(text).then(
            data => dispatch(setArtistAC(data))
        )
    }
}


export default musicReduce;