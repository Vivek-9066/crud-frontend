import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import addUserReducer from "./reducer";


const rootReducers = combineReducers({
   auth:addUserReducer,
})
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));