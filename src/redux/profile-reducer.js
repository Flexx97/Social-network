import {profile} from "../components/API/api";

const ADD_POST = 'ADD_POST',
    newProfile = 'NEW_PROFILE',
    GET_STATUS = 'GET_STATUS',
    DELETE_POST = 'DELETE_POST'

export let addPostActionCreator = (value) => ({
    type: ADD_POST,
    value
})

let profileUpdate = (profile) => ({
    type: newProfile,
    profile
})
export let gettingStatus = (status) => ({
        type: GET_STATUS,
        status
})
export let deletePostActionCreator = (num) => ({
        type: DELETE_POST,
        num
})


let initialState = {
    PostData: [
        {like: 20, message: 'Hi, how are you?', id: 1},
        {like: 15486, message: 'It\'s my first post', id: 2}
    ],
    profile: null,
    status: ''
}


let profileReduce = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                like: 0,
                message: action.value.posText
            }
            return {
                ...state,
                PostData: [...state.PostData, newPost],
            }
        }
        case newProfile:
            return {
                ...state,
                profile: action.profile
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
               PostData: state.PostData.filter(p => p.id !== action.num)
            }
        default:
            return state
    }

}

export const getProfile = (userId) => {
    return (dispatch) => {
        profile.profileUser(userId)
            .then(response => {
                dispatch(profileUpdate(response.data))
            })
    }
}
export const statusGet = (userId) => {
    return (dispatch) => {
        profile.getStatus(userId)
            .then(response => {
                dispatch(gettingStatus(response.data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profile.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                dispatch(gettingStatus(status))}
            })
    }
}



export default profileReduce