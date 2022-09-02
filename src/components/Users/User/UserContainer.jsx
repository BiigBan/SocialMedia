import { connect } from "react-redux";
import { changeCurrentProfileUserId } from "../../../redux/profile-reduce";
import { allPageAC, chosedUser, currentPageAC, followToggleAC, followUserDelete, followUserPost, getUsersThunk, setCountAC, setTotalCountAC, setUsersAC, toggleFetchingAC, userId, currentPortion } from "../../../redux/user-reduce";
import UserAPIContainer from "./UserAPIContainer";




const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        count: state.users.visibleCount,
        allPage: state.users.allPage,
        currentPageNum: state.users.currentPage,
        totalCount: state.users.totalCount,
        visibleCount: state.users.visibleCount,
        isFetching: state.users.isFetching,
        currentPortion: state.users.currentPortion,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentPortionFun: (currentPortion) => dispatch(currentPortion(currentPortion)),
        follow: (follow, userId) => dispatch(followToggleAC(follow, userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalCount: (count) => dispatch(setTotalCountAC(count)),
        currentPage: (page) => dispatch(currentPageAC(page)),
        allPageFun: (allPage) => dispatch(allPageAC(allPage)),
        isFetchingFun: (isFetching) => dispatch(toggleFetchingAC(isFetching)),
        // chosedUserFun: (user) => dispatch(chosedUser(user)),
        userIdFun: (id) => dispatch(userId(id)),
        changeCurrentProfileUserIdFun: (id) => dispatch(changeCurrentProfileUserId(id)),
        getUsersThunk: (currentPage, visibleCount) => dispatch(getUsersThunk(currentPage, visibleCount)),
        followUserPostThunk: (follow, id) => dispatch(followUserPost(follow, id)),
        followUserDeleteThunk: (follow, id) => dispatch(followUserDelete(follow, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAPIContainer);