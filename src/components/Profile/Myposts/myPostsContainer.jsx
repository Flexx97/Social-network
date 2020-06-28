import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostWay: state.profilePage.PostData,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator}) (MyPosts);

export default MyPostsContainer;