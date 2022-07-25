import { ActionTypes } from '../constants/actionTypes';
import { AnyAction } from 'redux';



//initial state for products in cart
const initialState = {
    productsInCartState: []
}

//
export const productCartReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            //add logic here
            return {
                //forming new state with old state
                productsInCartState: [...state.productsInCartState, action.payload]
            }
        default:
            return state
    }
}