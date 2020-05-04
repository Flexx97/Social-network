import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {setUserState} from "../../redux/Auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/auth/me`, {
            withCredentials: true,
            credentials: 'include',
            referrerPolicy: origin
        }).then(response => {
            this.props.setUserState(response.data.data.userId,response.data.data.login)
        })
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {

}

export default connect (mapStateToProps, {setUserState}) (HeaderContainer);