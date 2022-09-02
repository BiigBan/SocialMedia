import React from 'react';
import { newMessagePost, addPost } from '../../../redux/profile-reduce';
import TextPost from './TextPost'
import {connect} from 'react-redux'

// const TextPostContainer = (props) => {
//     let textChange = (text) => {
//         props.dispatch(newMessagePost(text))
//     }

//     let post = (text) => {
//         props.dispatch(addPost(text))
//     }

//     return <TextPost profile={props.profile} textChangeFun={textChange} postFun={post}/>;
// }

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        textChangeFun: (text) => dispatch(newMessagePost(text)),
            postFun: (text) => dispatch(addPost(text)),
    }
}

const TextPostContainer = connect(mapStateToProps, mapDispatchToProps)(TextPost);

export default TextPostContainer;