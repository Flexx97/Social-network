import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {getAuthMe, getLogOut} from "../../redux/Auth-reducer";



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return (
            <Header {...this.props} login={this.props.login} />
        );
    }
}

let mapStateToProps = (state) => ({
        login: state.auth.login,
})

export default connect (mapStateToProps, {getAuthMe, getLogOut}) (HeaderContainer);