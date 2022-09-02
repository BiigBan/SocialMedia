import cl from './User.module.css';
import UserImage from './UserImage/UserImage';
import UserInfo from './UserInfo/UserInfo';
import {NavLink} from 'react-router-dom';

const User = (props) => {

    let personId = `/Dialogues/${props.id}`;
    let personName = props.name;
    let personTime = props.time;

    const currentUserId = () => props.currentUser(props.id)


    return (
        <NavLink onClick={currentUserId} to={personId} className={cl.user}>
            <UserImage/>
            <UserInfo name={personName} time={personTime}/>
        </NavLink>
    )
}

export default User;