import profileReduce, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";


let state = {
    PostData: [
        {like: 20, message: 'Hi, how are you?', id: 1},
        {like: 15486, message: 'It\'s my first post', id: 2}
    ]
}


it('должен добавлять новый пост', () => {
    let action =  addPostActionCreator('my life is so crazy')
    let newState =  profileReduce(state, action)
    expect(newState.PostData.length).toBe(3)
})

it('должен удалить пост', () => {
    let action =  deletePostActionCreator(1)
    let newState =  profileReduce(state, action)
    expect(newState.PostData.length).toBe(1)
})
