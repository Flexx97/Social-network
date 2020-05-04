import React from 'react';
import bestFriendsReduce from "../../redux/BestFriends-reducer";
import BestFriends from "./BestFriends";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        FriendsWay: state.BestFriends.NavBestFriends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFriends: (Friends) => {
            dispatch(bestFriendsReduce(Friends))
        }
    }
}

const BestFriendsContainer = connect(mapStateToProps, mapDispatchToProps) (BestFriends);
export default BestFriendsContainer;