import { API } from "../api/api";

const GET_PORFILE = 'GET_PORFILE'

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
        default:
           return state
    }
}

const getProfileAC = (profile) => ({type : GET_PORFILE, payload : profile})

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        API.getProfile(userId)
            .then((res) => dispatch(getProfileAC(res.data)))
    }
}

export default profileReducer