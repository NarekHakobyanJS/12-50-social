import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
    withCredentials : true,
    headers : {
        'API-KEY' : '3942348e-0f62-40e2-a126-0216d80a64be'
    }
})

export const API = {
    setUsers(page, pageCount){
        return instance.get(`/users?page=${page}&count=${pageCount}`)
    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    authMe(){
        return instance.get('/auth/me',)
    },
    authLogin(email, password){
        return instance.post('/auth/login', {email, password})
    },
    changeAvatar(file){
        const formData = new FormData()
        formData.append('file', file)
        return instance.put('/profile/photo', formData)
    },
    followUser(id){
        return instance.post(`/follow/${id}`, {userId:id})
    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`)
    }
}