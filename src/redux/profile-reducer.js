const ADD_POST = 'ADD_POST',
UPDATE_TEXT_POST = 'UPDATE_TEXT_POST',
newProfile = 'NEW_PROFILE'

export let addPostActionCreator = () => ({
    type: ADD_POST
})

export let ChangeActionCreator = (add) => ({
    type: UPDATE_TEXT_POST,
    NewPostText: add
})
export let profileUpdate = (profile) => ({
    type: newProfile,
    profile
})


let initialState = {
    PostData: [
        {like: 20, message: 'Hi, how are you?'},
        {like: 15486, message: 'It\'s my first post'}
    ],
    NewPostText: 'Сегодня хочу вам рассказать...',
    profile: null
}


let profileReduce = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_TEXT_POST: return {
            ...state,
            NewPostText: action.NewPostText
        }
        case ADD_POST: {
            let newPost = {
                like: 0,
                message: state.NewPostText
            }
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                NewPostText: ''
            }
        }
        case newProfile: return {
            ...state,
            profile: action.profile
        }
        default:
            return state
    }

}


export default profileReduce