import cl from "./Item.module.css";
import Name from "./Name/Name";
import Text from './Text/Text'

const Item = (props) => {
    return (
        <div className={cl.item}>
            <Name name={props.name}/>
            <Text text={props.text}/>
        </div>
    )
}

export default Item;