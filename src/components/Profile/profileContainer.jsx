import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {getProfile, statusGet, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withRedirectLogin} from "../HOC-isAuth/hocRedirectLogin";
import {compose} from "redux";


class  ProfileContainer extends React.Component {

    componentDidMount() {
       let userID = this.props.match.params.userId
        if (!userID) {
            userID = this.props.authorizedUserId
        }
        this.props.getProfile(userID)
        this.props.statusGet(userID)
    }

    render() {
        return <Profile {...this.props}/>
    }

}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export  default compose(connect (mapStateToProps, {getProfile, statusGet, updateStatus}),
    withRouter,
    withRedirectLogin)
(ProfileContainer)

