const FOLLOW = 'FOLLOW',
UNFOLLOW = 'UNFOLLOW',
setUsers = 'SETUSERS',
ChangePage = 'CHANGEPAGE',
setTotalCount = 'SET_TOTAL_COUNT',
updatePage = 'UPDATEPAGE',
updatePageNumber = 'UPDATEPAGENUMBER',
setLoading = 'TOGGLE_LOADING',
loadUsers = 'LOAD_USERS'

export let follow = (userID) => ({
    type: FOLLOW,
    userID: userID
})
export let unFollow = (userID) => ({
    type: UNFOLLOW,
    userID: userID
})
export let getSetUsers = (users) => ({
    type: setUsers,
    users: users
})
export let updateChangePage = (num) => ({
    type: ChangePage,
    num: num
})
export let setCountTotal = (totalCount) => ({
    type: setTotalCount,
    totalCount
})
export let pageUpdate = (updateNumber) => ({
    type: updatePage,
    updateNumber: updateNumber,
})
export let updateNumberPage = (newPage) => ({
    type: updatePageNumber,
    newPage
})
export let toggleLoad = (val) => ({
    type: setLoading,
    val
})
export let usersLoad = () => ({
    type: loadUsers
})

let initialState = {
    users: [],
    pageNumber: 1,
    PageSize: 5,
    totalCount: 50,
    loaded: true,
    page: [1, 2, 3, 4]
}


let UsersReduce = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case setUsers:
            return {
                ...state,
                users: action.users
            }
        case ChangePage:
            return {
                ...state,
                pageNumber: action.num
            }
        case setTotalCount:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case updatePage:
            return {
                ...state,
                pageNumber: action.updateNumber
            }
        case updatePageNumber:
            return {
                ...state,
                page: action.newPage === undefined ? state.page : action.newPage
            }
        case setLoading:
            return {
                ...state,
                loaded: action.val
            }
        case loadUsers:
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}

export default UsersReduce