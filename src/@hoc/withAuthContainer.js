import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthUser,
    }
}



// export let withAuthContainer = (Component) => {
//     let AuthContainer = (props) => {
//         props.auth ? <Navigate to='/login' /> : <Component {...props} />;
//     } 
//     AuthContainer()

//     connect(mapStateToProps)(AuthContainer);
// }

//1
export const withAuthContainer = (Component) => {
    class Auth extends React.Component {
        render() {
            return !this.props.auth ? <Navigate to='/login' /> : <Component {...this.props} />;
        }
    }

    return connect(mapStateToProps)(Auth);
}
//1
// connect(mapStateToProps)(AuthContainer);