import cl from './UserTime.module.css';

const UserTime = (props) => {
    return ( 
        <div className={cl.time}>
            {props.time}
        </div>
    );
}

export default UserTime;