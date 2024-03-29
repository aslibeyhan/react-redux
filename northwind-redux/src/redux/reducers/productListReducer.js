import * as actionTypes from '../actions/actionsTypes'
import initialState from './initialState';

export default function productListReducer(state=initialState.products,action){
    switch (action.type) {
                         
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}