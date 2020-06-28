import {userAuth} from "../components/API/api";
import {stopSubmit} from "redux-form";

const logUser = 'SET_USER'

export let setUserState = (userId, login, email, isAuth) => ({
    type: logUser,
    userId,
    login,
    email,
    isAuth
})

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case logUser:
            return {
                ...state,
                userId: action.userId,
                login: action.login,
                email: action.email,
                isAuth: action.isAuth
            }
        default:
            return state
    }

}

export const getAuthMe = () => {
    return (dispatch) => {
        userAuth.authorization()
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setUserState(response.data.data.id, response.data.data.login, response.data.data.email, true))
                }})
    }
}
export const getLogIn = (email, password, rememberMe = false) => {
    return (dispatch) => {
        userAuth.logIn(email, password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(getAuthMe())
                } else {
                    let message = response.data.messages[0]
                    dispatch(stopSubmit('Login', {_error: message}))
                }
            })
    }
}
export const getLogOut = () => {
    return (dispatch) => {
        userAuth.logOut()
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setUserState( null, null, null, false))
                }})
    }
}


export default authReducer