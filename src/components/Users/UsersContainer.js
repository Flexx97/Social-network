import React from 'react';
import {connect} from "react-redux";
import {
    getUser, ChangePageUpdate,
    followUserAction, unFollowUserAction
} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../common/loader/loader";
import {
    getFollowProgress,
    getLoaded,
    getPage,
    getPageNumber,
    getPageSize,
    getTotalCount,
    getUsersState
} from "../../redux/reselect";

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.pageNumber, this.props.PageSize)
    }

    updatePage = (u, newPage) => {
        this.props.ChangePageUpdate(u, newPage, this.props.PageSize)
    }


    render() {
        return <div>
            {this.props.loaded === true ? <Loader/> : null}
            <Users page={this.props.page}
                   pageNumber={this.props.pageNumber}
                   userState={this.props.userState}
                   totalCount={this.props.totalCount}
                   PageSize={this.props.PageSize}
                   updatePage={this.updatePage}
                   UpdateNumber={this.props.UpdateNumber}
                   followProgress={this.props.followProgress}
                   followUserAction={this.props.followUserAction}
                   unFollowUserAction={this.props.unFollowUserAction}
            />
        </div>
    }
}

let mapStateToProps = (state) => ({
    userState: getUsersState(state),
    pageNumber: getPageNumber(state),
    PageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    page: getPage(state),
    loaded: getLoaded(state),
    followProgress: getFollowProgress(state)
})

let UsersContainer = connect(mapStateToProps, {
    getUser,
    ChangePageUpdate,
    followUserAction,
    unFollowUserAction
})(UsersContainerAPI);


export default UsersContainer