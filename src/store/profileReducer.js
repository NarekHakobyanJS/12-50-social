import { API } from "../api/api";

const GET_PORFILE = 'GET_PORFILE'
const CHANGE_PHOTO = 'CHANGE_PHOTO'
const initState = {
    profile: null
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PORFILE:
            return {
                ...state,
                profile: action.payload
            }
        case CHANGE_PHOTO :
            return {
                ...state,
                profile : {
                    ...state.profile,
                    photos : action.payload.data.photos
                }
            }
        default:
           return state
    }
}

const getProfileAC = (profile) => ({type : GET_PORFILE, payload : profile})
const getAvatarAC = (data) => ({type : CHANGE_PHOTO, payload : data})

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        API.getProfile(userId)
            .then((res) => dispatch(getProfileAC(res.data)))
    }
}

export const changeAvatarThunk = (file) => {
    return (dispatch) => {
        API.changeAvatar(file)
            .then((res) => dispatch(getAvatarAC(res.data)))
    }
}

export default profileReducer