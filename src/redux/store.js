import dialoguesReduce, { textValueActionCreator } from "./dialogues-reduce";
import profileReduce from "./profile-reduce";

const NEW_MESSAGE = 'NEW-MESSAGE';
const CONVERSATION_TEXT_ANSWER = 'CONVERSATION-TEXT-ANSWER';

const NEW_MESSAGE_POST = 'NEW-MESSAGE-POST';
const ADD_POST = 'ADD-POST';

let store = {
    rerenderDomTree() { },
    subscribe(observe) {
        this.rerenderDomTree = observe;
    },
    _state: {
        dialogues: {
            userData: [
                { name: 'Dima', id: '1', time: '03/04/2022' },
                { name: 'Denis', id: '2', time: '12/06/2022' },
                { name: 'Sveta', id: '3', time: '01/08/2022' },
                { name: 'Anton', id: '4', time: '11/11/2022' },
                { name: 'Grisha', id: '5', time: '12/04/2022' },
                { name: 'Lina', id: '6', time: '28/10/2022' },
            ],
            conversation: {
                user: [
                    { name: 'Dima', text: 'Hello, i`ve seen your last post. Thanks for your opinion and I hope u will enjoy to being in our web site' }
                ],
                me: [
                    { text: 'It`s great. Thank you for your message.' },
                ],
                textAnswer: '',
            }
        },
        profile: {
            user: {
                name: 'Denis Th',
                date: '14.21.2000',
                city: 'London',
                education: 'London',
                moreInformation: '-',
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
        }
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        
        this._state.dialogues = dialoguesReduce(this._state.dialogues, action);

        this._state.profile = profileReduce(this._state.profile, action);

        this.rerenderDomTree(this);
    },
}

export default store;