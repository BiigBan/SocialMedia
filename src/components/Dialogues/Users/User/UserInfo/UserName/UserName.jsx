import cl from './UserName.module.css';

const UserName = (props) => {
    return(
        <div className={cl.name}>
            {props.name}
        </div>
    )
}

export default UserName;