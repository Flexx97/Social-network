export const getUsersState = (state) => {
    return state.UsersPage.users
}
export const getPageNumber = (state) => {
    return state.UsersPage.pageNumber
}
export const getPageSize = (state) => {
    return state.UsersPage.PageSize
}
export const getTotalCount = (state) => {
    return state.UsersPage.totalCount
}
export const getPage = (state) => {
    return state.UsersPage.page
}
export const getLoaded = (state) => {
    return state.UsersPage.loaded
}
export const getFollowProgress = (state) => {
    return state.UsersPage.isFollowedProgress
}
