import cl from "./ItemReverse.module.css";
import Name from "./Name/Name";
import Text from './Text/Text'

const ItemReverse = (props) => {
    return (
        <div className={cl.item}>
            <Name />
            <Text text={props.text}/>
        </div>
    )
}

export default ItemReverse;