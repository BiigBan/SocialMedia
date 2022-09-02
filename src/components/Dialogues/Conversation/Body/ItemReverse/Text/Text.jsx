import cl from './Text.module.css';

const Text = (props) => {
    return (
        <div className={cl.text}>
            {props.text}
        </div>
    )
}

export default Text;