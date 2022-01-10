import {exhibitionConstants} from '../_constants/exhibition.constants'

const initialState = {
    data: [],
    error: null,
    loading: false
}

export function exhibitions(state = initialState, action){
    switch(action.type){
    case exhibitionConstants.EXHIBITIONS_REQUEST:
        return {
            ...initialState,
            loading: true
        }

    case exhibitionConstants.EXHIBITIONS_SUCCESS:
        return {
            ...initialState,
            data: action.payload,
        }

    case exhibitionConstants.EXHIBITIONS_FAILURE:
        return {
            ...initialState,
            error: action.payload
        }

    case exhibitionConstants.EXHIBITIONS_EDIT_REQUEST:
        return {
            ...initialState,
            data: action.payload,
        }

    case exhibitionConstants.EXHIBITIONS_EDIT_SUCCESS:
        return {
            ...initialState,
            data: action.payload,
        }

    case exhibitionConstants.EXHIBITIONS_EDIT_FAILURE:
        return {
            ...initialState,
            error: action.payload
        }

    default:
        return state

    }
}