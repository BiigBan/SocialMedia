
import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import authReduce from "./auth-reduce";
import dialoguesReduce from "./dialogues-reduce";
import profileReduce from "./profile-reduce";
import userReduce from "./user-reduce";
import appReduce from './app-reduce';
import newsReduce from "./news-reduce";

let reduces = combineReducers({
    profile: profileReduce,
    dialogues: dialoguesReduce,
    users: userReduce,
    news: newsReduce,
    auth: authReduce,
    app: appReduce,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduces, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));


// let store = createStore(reduces, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;

