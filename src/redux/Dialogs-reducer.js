const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const ADD_TEXT = 'ADD_TEXT'

export let updateMessageText = (newMes) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: newMes
})

export let addText = () => ({
    type: ADD_TEXT
})

let initialState = {
    Data: [
        {id: 1, name: 'Katya'},
        {id: 2, name: 'Fedor'},
        {id: 3, name: 'Alexey'}
    ],
    MesData: [
        {message: 'what are you doing'},
        {message: 'You suck'}
    ],
    updateMessage: '',
}


let messagePageReduce = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                updateMessage: action.newMessage
            }
        case ADD_TEXT:
            return {
                ...state,
                MesData: [...state.MesData, {message: state.updateMessage}],
                updateMessage: ''

            }
        default:
            return state
    }

}

export default messagePageReduce