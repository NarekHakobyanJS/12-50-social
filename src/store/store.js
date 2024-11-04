import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import { thunk } from "redux-thunk";

// useSelector((state) => state.usersPage.users)

const rootReducer = combineReducers({
    usersPage : usersReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store