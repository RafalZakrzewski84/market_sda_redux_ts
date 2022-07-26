import { ActionTypes } from "../constants/actionTypes";
import { ProductsInitialState } from '../../helpers/interfaces'
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from 'redux';

//action for fetching 10 products from API
export const fetchProducts = (quantity: number): ThunkAction<void, ProductsInitialState, number, AnyAction> => {
    //fetchProducts function will return dispatching function witch data from API
    return async (dispatch) => {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${quantity}`);
        dispatch({
            //this is action.payload in productReducer
            type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data
        })
    }
}