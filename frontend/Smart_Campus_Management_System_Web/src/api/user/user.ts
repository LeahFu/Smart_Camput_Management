import request from '../request'

// Get user list data
export function getUserListApi(data:object) {
    return request({
        url: 'user',
        method: 'get',
        params: data

    })
}
// Add user information
export function addUserApi(data:object) {
    return request({
        url: 'user',
        method: 'post',
        data
    })
}
// Get user details by id
export function getUserApi(id:number) {
    return request({
        url: `user/${id}`,
        method: 'get'
    })
}
// Refresh user information
export function editUserApi(data:object) {
    return request({
        url: 'user',
        method: 'put',
        data
    })
}
// Delete user information based on ID
export function deleteUserApi(id:number) {
    return request({
        url: `user/${id}`,
        method: 'delete'
    })
}