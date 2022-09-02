import { useEffect, useMemo, useState } from "react";
import cl from "./Body.module.css";
import Item from "./Item/Item";
import ItemReverse from "./ItemReverse/ItemReverse";
import TextAnswerContainer from "./TextAnswer/TextAnswerContainer";



const Body = (props) => {
    const [conversation, setConversation] = useState([]);
    
    useEffect(() => {
        setConversation([props.conversation.me, props.conversation.user].flat())
    }, [props.conversation])


        if (conversation === []) {
            return <img src="./../../../../assets/loader/loader.svg" alt="Loader" />
        } else {
            let chat = conversation.map(el => el.name != undefined ?  <Item name={el.name} text={el.text}/> : <ItemReverse text={el.text}/> )
            return (
                <div className={cl.body}>
                    <div className={cl.body__content}>
                        {chat}
                    </div>
                    <TextAnswerContainer />
                </div>
            )
        }

}
//1

export default Body;