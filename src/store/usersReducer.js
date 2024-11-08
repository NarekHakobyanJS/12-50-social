import { API } from "../api/api";

// action Type 
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_USER_COUNT = 'SET_USER_COUNT'
const FOLLOWING_USERS = 'FOLLOWING_USERS'

// initState
const initState = {
    users: [],
    page: 1,
    pageCount: 100,
    totalUsersCount: 0,
    following:[]

}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.paylaod
            }
        case CHANGE_PAGE: {
            return {
                ...state,
                page: action.paylaod
            }
        }
        case SET_USER_COUNT: {
            return {
                ...state,
                totalUsersCount: action.paylaod
            }
        }
        case FOLLOWING_USERS: {
            return {
                ...state,
                following: action.paylaod
            }
        }
        default:
            return state
    }
}
// action Creator
const setUsersAC = (data) => ({ type: SET_USERS, paylaod: data })
export const changePageAC = (page) => ({ type: CHANGE_PAGE, paylaod: page })
const setUserCount = (userCount) => ({ type: SET_USER_COUNT, paylaod: userCount })
const followingUsersAC = (data) => ({type: FOLLOWING_USERS, paylaod: data})

// ThunkCreator
export const setUsersThunk = (page, pageCount) => {
    return (disaptch) => {
        API.setUsers(page, pageCount)
            .then((res) => {
                disaptch(setUserCount(res.data.totalCount))
                disaptch(setUsersAC(res.data.items))
            })
    }
}

export const followingUsersThunk = (id) => {
    return (disaptch) => {
        API.followUser(id)
            .then((res) => {
                disaptch(followingUsersAC(res.data))
            })
    }
}

export default usersReducer