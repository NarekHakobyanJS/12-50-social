import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import { thunk } from "redux-thunk";
import authReducer from "./authReducer";

// useSelector((state) => state.usersPage.users)

const rootReducer = combineReducers({
    usersPage : usersReducer,
    profilePage : profileReducer,
    auth : authReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store