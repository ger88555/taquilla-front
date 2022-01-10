import {promoConstants} from '../_constants'

const initialState = {
    data: [],
    error: null,
    loading: false
}

export function promos(state = initialState, action){
    switch(action.type){
    case promoConstants.PROMOS_REQUEST:
        return {
            ...initialState,
            loading: true
        }

    case promoConstants.PROMOS_SUCCESS:
        return {
            ...initialState,
            data: action.payload,
        }

    case promoConstants.PROMOS_FAILURE:
        return {
            ...initialState,
            error: action.payload
        }

    case promoConstants.PROMOS_ADD_REQUEST:
        return {
            ...initialState,
            loading: true
        }

    case promoConstants.PROMOS_ADD_SUCCESS:
        return {
            ...initialState,
            data: action.payload,
        }

    case promoConstants.PROMOS_ADD_FAILURE:
        return {
            ...initialState,
            error: action.payload
        }
    default:
        return state

    }
}