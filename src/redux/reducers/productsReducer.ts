import { AnyAction } from "redux";
import { ActionTypes } from "../constants/actionTypes";

//initial state for fetched products
const initialState = {
    fetchedProducts: [],
    fetchedImages: [],
};

//reducer inform which state update
export const productReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS:
            return {
                //returning of new state using dispatch action in bestsellers component
                fetchedProducts: action.payload,
                fetchedImages: [...state.fetchedImages]
            }
        case ActionTypes.FETCH_CATEGORY_IMAGES:
            return {
                //state updated by category img fetched by action dispatched in CategoryTile
                fetchedProducts: [...state.fetchedProducts],
                fetchedImages: action.payload
            }

        default:
            return state;
    }
}