import {combineReducers, createStore} from "redux";
import profileReduce from "./profile-reducer";
import messagePageReduce from "./Dialogs-reducer";
import bestFriendsReduce from "./BestFriends-reducer";
import UsersReduce from "./users-reducer";
import authReducer from "./Auth-reducer";

let reduceComb = combineReducers({
    profilePage: profileReduce,
    messagePage: messagePageReduce,
    BestFriends: bestFriendsReduce,
    UsersPage: UsersReduce,
    auth: authReducer
})

let store = createStore(reduceComb);


export default store