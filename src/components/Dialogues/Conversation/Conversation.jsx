import BodyContainer from "./Body/BodyContainer";
import cl from "./Conversation.module.css";

const Conversation = () => {
    return (
        <div className={cl.conversation}>
            <BodyContainer/>
        </div>
    )
}

export default Conversation;