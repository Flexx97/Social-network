import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getSetUsers,
    pageUpdate,
    setCountTotal, toggleLoad,
    unFollow,
    updateChangePage,
    updateNumberPage, usersLoad
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Loader from "../common/loader/loader";

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.usersLoad()
        this.props.toggleLoad(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.PageSize}`).then(response => {
            this.props.toggleLoad(false)
            this.props.getSetUsers(response.data.items)
            this.props.setCountTotal(response.data.totalCount)
        })
    }

    ChangePage = (u, newPage) => {
        this.props.usersLoad()
        this.props.toggleLoad(true)
        this.props.updateChangePage(u)
        this.props.updateNumberPage(newPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${u}&count=${this.props.PageSize}`).then(response => {
            this.props.toggleLoad(false)
            this.props.getSetUsers(response.data.items)
        })
    }


    render() {
        return  <div>
            {this.props.loaded === true ? <Loader/> : null}
        <Users page={this.props.page}
                   pageNumber={this.props.pageNumber}
                   userState={this.props.userState}
                   totalCount={this.props.totalCount}
                   PageSize={this.props.PageSize}
                   ChangePage={this.ChangePage}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   UpdateNumber={this.props.UpdateNumber}
            />
        </div>
    }
}

let mapStateToProps = (state) => ({
    userState: state.UsersPage.users,
    pageNumber: state.UsersPage.pageNumber,
    PageSize: state.UsersPage.PageSize,
    totalCount: state.UsersPage.totalCount,
    page: state.UsersPage.page,
    loaded: state.UsersPage.loaded
})

let UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    getSetUsers,
    updateChangePage,
    setCountTotal,
    pageUpdate,
    updateNumberPage,
    toggleLoad,
    usersLoad
})(UsersContainerAPI);


export default UsersContainer