import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthContainer } from '../../@hoc/withAuthContainer';
import { setProfileUser, getProfileUserThunk, setStatusThunk, getStatusThunk } from '../../redux/profile-reduce';
import Profile from './Profile';


const ProfileContainer = (props) => {
    let currentUserId = useParams();
    useEffect(() => {
        props.getProfileUserThunk(currentUserId.userId)
        props.getStatusThunk(currentUserId.userId)
    }, [])
    const currentProfile = props.profile.profile.profileUser ? props.profile.profile.profileUser : props.profile.profile.user;

    //1
    // let ProfileRender = withAuthContainer(Profile);
    //1
    return (
        <Profile profile={currentProfile} status={props.status} setStatusThunk={props.setStatusThunk}/>

    )
}

// c

const mapStateToProps = (state) => {
    return {
        profile: state,
        currentUser: state.profile.currentProfileUserId,
        status: state.profile.status,
        isAuthUser: state.auth.isAuthUser,
        // auth: state.auth.isAuthUser,
        // currentUserId: 2,
        // chosedUser: state.users.chosedUser,
    }
}

export default compose(
                connect(mapStateToProps, { setProfileUser, getProfileUserThunk, setStatusThunk, getStatusThunk }),
                // withAuthContainer
            )(ProfileContainer)

// let ProfileRender = withAuthContainer(ProfileContainer);

// export default connect(mapStateToProps, { setProfileUser, getProfileUserThunk })(ProfileContainer)

