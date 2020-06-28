import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withRedirectLogin = (Component) => {

    class redeirectLogin extends React.Component {
        render() {
            if (this.props.isAuth === false) {
                return <Redirect to='/login'/>
            }
            return <Component {...this.props}/>
        }
    }

    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })
    return connect(mapStateToProps)(redeirectLogin)
}