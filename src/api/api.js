import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

export const API = {
    setUsers(page, pageCount){
        return instance.get(`/users?page=${page}&count=${pageCount}`)
    }
}