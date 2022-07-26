import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk'
import { useDispatch } from "react-redux";

//configure store
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(thunk)
    }
})

//ts type for useAppDispatch
export type AppDispatch = typeof store.dispatch;

//global defining dispatch which will know that we have middleware
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;