import { API } from "../api/api";

const AUTH_ME = 'AUTH_ME'
const AUTH_LOGIN = "AUTH_LOGIN"
const initState = {
    id : null,
    email : null,
    login : null,
    userId : null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state,
                id : action.payload.id,
                email : action.payload.email,
                login : action.payload.login
            }
            case AUTH_LOGIN : {
                return {
                    ...state,
                    userId : action.payload.userId
                }
            }
        default:
           return state
    }
}

const getAuthMeAC = (data) => ({type : AUTH_ME, payload : data})
const getAuthLoginAC = (userId) => ({type : AUTH_LOGIN, payload : userId})


export const getLoginThunk = (login, password) => {
    return (dispatch) => {
        API.authLogin(login, password)
            .then((res) => dispatch(getAuthLoginAC(res.data.data)))
    }
}
export const getMeAuthThunk = () => {
    return (dispatch) => {
        API.authMe()
            .then((res) => dispatch(getAuthMeAC(res.data.data)))
    }
}

export default authReducer