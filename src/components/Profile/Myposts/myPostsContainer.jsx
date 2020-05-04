import React from 'react';
import {addPostActionCreator, ChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostWay: state.profilePage.PostData,
        PostText: state.profilePage.NewPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        ChangeAction: (add) => {
            dispatch(ChangeActionCreator(add))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;