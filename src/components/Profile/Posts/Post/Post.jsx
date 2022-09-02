import cl from './Post.module.css';

const Post = (props) => {
    return (
        <div className={cl.item}>
            <div className={cl.icon}>
                <img src='https://play-lh.googleusercontent.com/MmLHNN4_lwIN7kMG7XWnOxSYbEju-FBMEn8oDj4Xt8t9EnnH6S6GQeMHJDWpGfeDOSpM'></img>
            </div>
            <div className={cl.post}>
                <div className={cl.post__name}>{props.name}</div>
                <div className={cl.post__text}>{props.message}</div>
                <div className={cl.post__like}>Like: {props.likecount}</div>
            </div>
        </div>
    )
}

export default Post;