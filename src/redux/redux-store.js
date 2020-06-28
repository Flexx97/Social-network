import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduce from "./profile-reducer";
import messagePageReduce from "./Dialogs-reducer";
import bestFriendsReduce from "./BestFriends-reducer";
import UsersReduce from "./users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reduceComb = combineReducers({
    profilePage: profileReduce,
    messagePage: messagePageReduce,
    BestFriends: bestFriendsReduce,
    UsersPage: UsersReduce,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reduceComb, applyMiddleware(thunkMiddleware));


export default store