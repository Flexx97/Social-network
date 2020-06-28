const ADD_TEXT = 'ADD_TEXT'

export let addText = (value) => ({
    type: ADD_TEXT,
    value
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
}


let messagePageReduce = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                MesData: [...state.MesData, {message: action.value.messageText}],

            }
        default:
            return state
    }

}

export default messagePageReduce