import {cartConstants} from '../_constants/cart.constants'

const initialState = {
    data: {
        id: null,
        pago_de_pedido_id: null,
        nombre_cliente: '',
        correo: '',
        subtotal: null,
        total: null,
        items: []
    },
    error: null,
    loading: false
}

export function cart(state = initialState, action){
    switch(action.type){
    case cartConstants.CART_REQUEST:
        return {
            ...initialState,
            loading: true
        }

    case cartConstants.CART_SUCCESS:
        return {
            ...initialState,
            data: {
                ...initialState.data,
                ...action.payload
            },
        }

    case cartConstants.CART_FAILURE:
        return {
            ...initialState,
            error: action.payload
        }

    case cartConstants.CART_ITEM_FAILURE:
        return {
            ...state,
            error: action.payload
        }

    default:
        return state

    }
}