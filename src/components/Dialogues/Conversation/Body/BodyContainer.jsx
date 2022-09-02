import { connect } from "react-redux";
import Body from "./Body";

const mapStateToProps = (state) => {
    return {
        conversation: state.dialogues.conversation,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Body);