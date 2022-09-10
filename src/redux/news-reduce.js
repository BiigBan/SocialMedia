import { newsAPI } from "../api/api";
import { toggleFetchingAC } from "./user-reduce";

const SET_NEWS = 'SET_NEWS';
const IS_FETCHING = 'IS_FETCHING';


const initialState = {
    articles: [
    ],
}

const newsReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                articles: action.data
            }

        default:
            return state;
    }
}

export const setNews = (data) => {
    return {
        type: SET_NEWS,
        data: data
    }
}


export const getNewsAC = (country) => {
    return dispatch => {
        newsAPI.getNews(country).then(
            data => {
                dispatch(setNews(data.articles))
                console.log(data);
            },
        )
    }
}

export default newsReduce;