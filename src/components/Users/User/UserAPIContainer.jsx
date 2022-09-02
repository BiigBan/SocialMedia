import React from "react";
import User from "./User";
import loader from './../../../assets/loader/loader.svg'
import { userAPI } from "../../../api/api";

class UserAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPageNum, this.props.visibleCount);
    }


    onPageChangeFun = (pageNum) => {
        this.props.getUsersThunk(pageNum, this.props.visibleCount);
    }


    render() {
        if (this.props.isFetching) {
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={loader} />
                </div>
            )
        } else {
            return <User onPageChangeFun={this.onPageChangeFun}
                currentPortion={this.props.currentPortion}
                allPageFun={this.props.allPageFun}
                totalCount={this.props.totalCount}
                count={this.props.count}
                allPage={this.props.allPage}
                currentPageNum={this.props.currentPageNum}
                users={this.props.users}
                follow={this.props.follow}
                changeCurrentProfileUserIdFun={this.props.changeCurrentProfileUserIdFun}
                // chosedUserFun={this.props.chosedUserFun}
                userIdFun={this.props.userIdFun}
                followUserPostThunk={this.props.followUserPostThunk}
                followUserDeleteThunk={this.props.followUserDeleteThunk}
                currentPortionFun={this.props.currentPortionFun}
            />
        }
    }
}

export default UserAPIContainer;