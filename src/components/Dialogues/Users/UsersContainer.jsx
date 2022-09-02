import { connect } from 'react-redux'
import { currentUser, getUsers } from '../../../redux/dialogues-reduce'
import { allPageAC, getUsersThunk } from '../../../redux/user-reduce'
import Users from './Users'



const mapStateToProps = (state) => {
    return {
        userInfo: state.dialogues.userData,
        currentPageNum: state.users.currentPage,
        totalCount: state.users.totalCount,
        count: state.users.visibleCount,
        allPage: state.users.allPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: (id) => dispatch(currentUser(id)),
        allPageFun: (allPage) => dispatch(allPageAC(allPage)),
        getUsersFun: (currentPageNum, visibleCount) => dispatch(getUsers(currentPageNum, visibleCount))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);