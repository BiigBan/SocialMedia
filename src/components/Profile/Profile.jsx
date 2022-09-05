import Background from './Background/Background';
import Persons from './Persons/Persons';
import cl from './Profile.module.css';
import TextPostContainer from './TextPost/TextPostContainer';
import PostsContainer from './Posts/PostsContainer';
import UserPost from './UserPost/UserPost'

const Profile = (props) => {
    return (
        <main className={cl.main}>
            <Background/>
            <Persons profile={props.profile}/>
            <UserPost currentUserId={props.currentUserId} status={props.status} setStatusThunk={props.setStatusThunk}/>
            <TextPostContainer/>
            <PostsContainer/>
        </main>
    );
}

export default Profile;