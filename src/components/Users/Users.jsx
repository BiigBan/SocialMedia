import UserContainer from './User/UserContainer';
import cl from './Users.module.css';

const Users = () => {
    return (
        <div className={cl.users}>
            <UserContainer/>
        </div>
    )
}

export default Users;