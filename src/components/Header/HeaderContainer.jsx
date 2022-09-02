import React from 'react';
import { getAuthUserThunk, logoutThunk} from '../../redux/auth-reduce';
import { connect } from 'react-redux';
import Header from './Header';
import { login, isAuthUser } from '../../redux/header-reselect';


class HeaderContainer extends React.Component {



    render() {
        return (
            <Header logout={this.props.logoutThunk} isAuthUser={this.props.isAuthUser} login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthUser: isAuthUser(state),
        login: login(state),
    }
}

export default connect(mapStateToProps, {getAuthUserThunk, logoutThunk})(HeaderContainer);