import Conversation from './Conversation/Conversation';
import Dialogs from './Dialogs/Dialogs';
import cl from './Dialogues.module.css';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers } from '../../redux/dialogues-reduce';
import Loader from '../@Loader/Loader';


const Dialogues = (props) => {


    useEffect(() => {
        props.getUsersFun();
    }, [])
    if (!props.auth) {
        return (
            <Navigate to='/login' />
        )
    }
    let conversation;
    if (!props.currentUser) {
        conversation = <Loader />
    } else {
        conversation = <Conversation />;
    }
    return (
        <div className={cl.dialogues}>
            <Dialogs />
            {conversation}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthUser,
        users: state.dialogues.userData,
        currentUser: state.dialogues.currentUser,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsersFun: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogues);