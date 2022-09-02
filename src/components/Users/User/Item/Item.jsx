import cl from './Item.module.css';
import male from './../../../../assets/image/OIP.jfif';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let onSubmitFun = () => {
        if (props.followStatus === false) {
            props.followUserPostThunk(props.followStatus, props.userId)
        } else {
            props.followUserDeleteThunk(props.followStatus, props.userId)
        }
    }

    let image = props.image.small != null ? props.image.small : male;

    const onClickUserFun = () => {
        props.changeCurrentProfileUserIdFun(props.userId);
        props.userIdFun(props.userId);
    }
    let followFun = () => {
        if (props.followStatus === false) {
            return 'Unfollow'
        } else { return 'Follow' }};

    return (
        <div className={cl.item}>
            <div className={cl.block}>
                <NavLink to={`./../Profile/${props.userId}`} onClick={onClickUserFun}>
                    <div className={cl.image}>
                        <img src={image} alt="Icon of users" />
                    </div>
                </NavLink>
                <button onClick={onSubmitFun} className={cl.followButton}>
                {followFun()}
                </button>
            </div>
            <NavLink to={`./../Profile/${props.userId}`} onClick={onClickUserFun}>
                <div className={cl.secondBlock}>
                    <div className={cl.info}>
                        <div className={cl.name}>{props.name}</div>
                        {/* <div className={cl.location}>
                        <span className={cl.city}>{props.location.cityName}</span>
                        <span className={cl.country}>{props.location.country}</span>
                    </div> */}
                    </div>
                    <div className={cl.status}>{props.status}</div>
                </div>
            </NavLink>
        </div>
    )
}

export default Item;