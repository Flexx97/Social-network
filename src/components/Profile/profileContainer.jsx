import React from 'react';
import Profile from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {profileUpdate} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class  ProfileContainer extends React.Component {

    componentDidMount() {
       let userID = this.props.match.params.userId
        !userID ? userID = 2 : userID = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userID, {
        }).then(response => {
            this.props.profileUpdate(response.data)
        })
    }

    render() {
        return <Profile {...this.props}/>
    }

}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.profile
})

export default connect (mapStateToProps, {profileUpdate}) (withRouter(ProfileContainer));