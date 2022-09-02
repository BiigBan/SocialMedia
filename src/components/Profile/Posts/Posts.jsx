import Post from './Post/Post';
import cl from './Posts.module.css'

const Posts = (props) => {
    let postElements = props.posts.map(el => {
        return <Post  message={el.message} name={el.name} likecount={el.likecount} />
    })

    return (
        <div className={cl.posts}>
            {postElements}
        </div>
    );
}


export default Posts;