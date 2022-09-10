import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { setProfileUser, getProfileUserThunk, setStatusThunk, getStatusThunk } from '../../redux/profile-reduce';
import Profile from './Profile';


const ProfileContainer = (props) => {
    let currentUserId = useParams();

            //1 При обновении страницы - не успевает прийти promise profileUser =>идет заспрос "/profile/null"

    useEffect(() => {
        if (Object.keys(currentUserId).length != 0) {
            props.getProfileUserThunk(currentUserId.userId)
            props.getStatusThunk(currentUserId.userId)
        } else {
            props.getProfileUserThunk(props.profileId)
            props.getStatusThunk(props.profileId)
        }
    }, [currentUserId.userId, props.currentUser])
    const currentProfile = props.profile.profile.profileUser ? props.profile.profile.profileUser : props.profile.profile.user;

    if(!props.profileId && !props.isAuthUser && !currentUserId.userId) {
        return <Navigate to={'/Users'}/>
    }
    return (
        <Profile currentUserId={currentUserId} profile={currentProfile} status={props.status} setStatusThunk={props.setStatusThunk} />

    )
}

const mapStateToProps = (state) => {
    return {
        profile: state,
        currentUser: state.profile.currentProfileUserId,
        status: state.profile.status,
        isAuthUser: state.auth.isAuthUser,
        profileId: state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps, { setProfileUser, getProfileUserThunk, setStatusThunk, getStatusThunk }),
    // withAuthContainer
)(ProfileContainer)