import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'e73e7e4e-cc87-4989-8a25-3b3153927263'}
})
export const usersAPI = {
    getUsers(pageNumber, PageSize) {
        return instance.get(`users?page=${pageNumber}&count=${PageSize}`)
            .then(response => {
                return response.data
            })
    }
}
export const followUnfollow = {
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    }
}
export const userAuth = {
    authorization() {
        return instance.get('auth/me')
    },
    logIn(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logOut() {
        return instance.delete('auth/login')
    }
}
export const profile = {
    profileUser(userID) {
        return instance.get(`profile/` + userID)
    },
    getStatus(userID) {
        return instance.get(`/profile/status/` + userID)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status})
    }
 }