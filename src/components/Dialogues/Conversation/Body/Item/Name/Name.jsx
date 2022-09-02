import cl from './Name.module.css';

const Name = (props) => {
    return (
        <div className={cl.name}>
            {props.name}:
        </div>
    )
}

export default Name;