const logUser = 'SET_USER'

export let setUserState = (userId, login) => ({
    type: logUser,
    userId,
    login,
})

let initialState = {
    userId: null,
    login: null,
    isAuth: false
}


let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case logUser:
            return {
                ...state,
                userId: action.userId,
                login: action.login,
                isAuth: true
            }
        default:
            return state
    }

}

export default authReducer