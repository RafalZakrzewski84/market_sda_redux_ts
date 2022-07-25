import { ActionTypes } from '../constants/actionTypes';
import { Product } from '../../helpers/interfaces'

export const setProductCartState = (productCartState: Product) => {
    return {
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: productCartState,
    }
}