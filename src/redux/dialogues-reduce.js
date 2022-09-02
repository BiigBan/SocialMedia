import { dialogAPI, userAPI } from "../api/api";
import { currentPageAC, setTotalCountAC, setUsersAC } from "./user-reduce";

const NEW_MESSAGE = 'NEW-MESSAGE';
const CONVERSATION_TEXT_ANSWER = 'CONVERSATION-TEXT-ANSWER';
const ANSWER = 'ANSWER';
const USERS = 'USERS';
const CURRENT_USER = 'CURRENT_USER';

let initialState = {
    userData: [
        // { name: 'Dima', id: '1', time: '03/04/2022' },
        // { name: 'Denis', id: '2', time: '12/06/2022' },
        // { name: 'Sveta', id: '3', time: '01/08/2022' },
        // { name: 'Anton', id: '4', time: '11/11/2022' },
        // { name: 'Grisha', id: '5', time: '12/04/2022' },
        // { name: 'Lina', id: '6', time: '28/10/2022' },
    ],
    conversation: {
        user: [
            { name: '', text: '' }
        ],
        me: [
            { text: '' },
        ],
        textAnswer: '',
    },
    currentUser: null,
};

const dialoguesReduce = (state = initialState, action) => {
    window.action = action
    switch (action.type) {
        case NEW_MESSAGE: {
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    user: [...state.conversation.user, { text: action.newConversation }],
                    textAnswer: '',
                }
            }
        }
        case CONVERSATION_TEXT_ANSWER: {
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    textAnswer: action.newConversation,
                }
            };
        }
        case USERS: {
            return {
                ...state,
                userData: [...action.users],
            }
        }
        case ANSWER: {
            let name = state.userData.filter(el => el.id === state.currentUser);
            return {
                ...state,
                conversation: {
                    ...state.conversation,

                    //1 ERROR
                    user: [...state.conversation.user, { name: name[0].name, text: action.text }]
                },
                //1,
            }
        }
        case CURRENT_USER: {
            let name = state.userData.filter(el => el.id === action.id);
            return {
                ...state,
                currentUser: action.id,
                conversation: {
                    ...state.conversation,
                    user: [{ name: [...state.conversation.user].map(el => el.name = name[0].name)[0], text: '' }],
                },

            }
        }
        default:
            return state;
    }
    /*
        //1
        case NEW_MESSAGE: {
            // const stateCopy = {...state};
            // stateCopy.conversation.me.push({text: action.newConversation})
            // stateCopy.conversation.textAnswer = '';
            return {
                ...state,
                conversation: copy(state.conversation, action)
            }
        }

        //1
        */
}
export const newMessageActionCreator = (newConversation) => {
    return { type: NEW_MESSAGE, newConversation: newConversation }
}

export const conversationTextAnswerActionCreator = (text) => {
    return { type: CONVERSATION_TEXT_ANSWER, text: text }
}
export const answer = (text) => {
    debugger
    return { type: ANSWER, text }
}
export const users = (users) => {
    return { type: USERS, users }
}

export const currentUser = (id) => {
    return { type: CURRENT_USER, id }
}

export const getUsers = (currentPageNum, count) => {
    debugger
    return (dispatch) => {
        userAPI.getUsers(currentPageNum, count).then(
            data => {
                dispatch(users(data.items))
            }
        );
    }
}

export const message = (text, id) => {
    debugger
    return async dispatch => {
        let chat = await dialogAPI.getChat(text, id)
        chat = chat.data.chatbot;
        debugger
        dispatch(conversationTextAnswerActionCreator(chat.message));
        dispatch(answer(chat.response));
    }
}



export default dialoguesReduce;