import {itemConstants} from '../_constants/item.constants'

const initialState = {
    data: [],
    error: null,
    loading: false
}

export function items(state = initialState, action){
    switch(action.type){
    case itemConstants.CART_ITEMS_REQUEST:
        return {
            ...initialState,
            loading: true
        }

    case itemConstants.CART_ITEMS_SUCCESS:
        return {
            ...initialState,
            data: [
                ...action.payload
            ],
        }

    case itemConstants.CART_ITEMS_FAILURE:
        return {
            ...initialState,
            error: action.payload
        }

    default:
        return state

    }
}