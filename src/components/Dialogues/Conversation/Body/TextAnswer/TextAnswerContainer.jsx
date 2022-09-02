import React from "react";
import { newMessageActionCreator, conversationTextAnswerActionCreator, message } from "../../../../../redux/dialogues-reduce";
import TextAnswer from "./TextAnswer";
import { connect } from 'react-redux';

// const TextAnswerContainer = (props) => {
//     debugger
//     let buttonSend = (text) => props.dispatch(newMessageActionCreator(text));

//     let changeText = (text) => {
//         props.dispatch(conversationTextAnswerActionCreator(text));
//     }

//     return <TextAnswer textAnswer={props.textAnswer} buttonSend={buttonSend} changeText={changeText}/>
// }

let mapStateToProps = (state) => {
    return {
        textAnswer: state.dialogues.conversation.textAnswer,
        currentId: state.dialogues.currentUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        buttonSend: (text) => dispatch(newMessageActionCreator(text)),
        changeText: (text) => dispatch(conversationTextAnswerActionCreator(text)),
        message: (text, id) => dispatch(message(text, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextAnswer);