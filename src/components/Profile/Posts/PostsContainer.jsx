import { connect } from 'react-redux';
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return{
        posts: state.profile.postData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);