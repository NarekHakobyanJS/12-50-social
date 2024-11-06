import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

export const API = {
    setUsers(page, pageCount){
        return instance.get(`/users?page=${page}&count=${pageCount}`)
    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    authMe(){
        return instance.get('/auth/me', {withCredentials : true})
    },
    authLogin(email, password){
        return instance.post('/auth/login', {email, password})
    }
}