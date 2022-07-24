import { combineReducers } from "redux";
import { authReducer } from './authReducers';


//combining reducers to one pack
export const rootReducer = combineReducers({
    authState: authReducer,
})