import { combineReducers } from "redux";
import { authReducer } from './authReducers';
import { productCartReducer } from "./productCartReducers";


//combining reducers to one pack
export const rootReducer = combineReducers({
    authState: authReducer,
    productsInCartState: productCartReducer,
})