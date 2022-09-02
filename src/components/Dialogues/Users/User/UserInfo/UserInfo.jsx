import cl from './UserInfo.module.css';
import UserName from './UserName/UserName';
import UserTime from './UserTime/UserTime';

const UserInfo = (props) => {

    let personName = props.name;
    let personTime = props.time;

    return(
    <div className={cl.userInfo}>
        <UserName name={personName}/>
        <UserTime time={personTime}/>
    </div>
    )
}

export default UserInfo;