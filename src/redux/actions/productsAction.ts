import { ActionTypes } from "../constants/actionTypes";
import { ProductsInitialState } from '../../helpers/interfaces'
import axios from "axios";

//two imports below are interfaces
import { ThunkAction } from "redux-thunk";
import { AnyAction } from 'redux';

//action for fetching 10 products from API - action dispatched in Bestsellers
export const fetchProducts = (quantity: number): ThunkAction<void, ProductsInitialState, number, AnyAction> => {
    //fetchProducts function will return dispatching function witch data from API
    return async (dispatch) => {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${quantity}`);
        console.log(response.data)
        dispatch({
            //this is action.payload in productReducer for fetchedProducts
            type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data
        })
    }
}

//action for fetching category images - action dispatched in CategoryTile
export const fetchCategoryImg = (categories: string[]): ThunkAction<void, ProductsInitialState, string, AnyAction> => {
    console.log('fetchCategoryImg', categories)
    return async (dispatch) => {
        const images = []
        for (let category of categories) {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}?limit=1`);
            // console.log(response.data)
            // console.log(response.data[0].image)
            images.push(response.data[0].image)

        }
        console.log(images)
        dispatch({
            //this is action.payload in productReducer for fetchedImages
            type: ActionTypes.FETCH_CATEGORY_IMAGES,
            payload: images,
        })
    }
}