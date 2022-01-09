import { itemConstants } from '../_constants'
import { itemService } from '../_services'

export const itemActions = {
    list,
    add,
    updateTickets
}


function list(cart_id){

    
    return dispatch => {

        dispatch(request())

        itemService.list(cart_id)
            .then(
                data => {
                    dispatch(success(data))                    
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request() { return { type: itemConstants.CART_ITEMS_REQUEST } }
    function success(data) { return { type: itemConstants.CART_ITEMS_SUCCESS, payload: data } }
    function failure(error) { return { type: itemConstants.CART_ITEMS_FAILURE, payload: error } }    

}


function add(exhibition_id, promo_id = null){

    const data = {
        pedido_id: localStorage.getItem('cart_id') || undefined,
        exhibicion_id: exhibition_id,
        promocion_id: promo_id
    }
    
    return dispatch => {

        dispatch(request())

        itemService.add(data)
            .then(
                data => {
                    // Save the cart id for future page loads.
                    localStorage.setItem('cart_id', data.pedido_id)

                    dispatch(success(data))
                    
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request() { return { type: itemConstants.CART_ITEMS_REQUEST } }
    function success() { return { type: itemConstants.CART_ITEMS_SUCCESS } }
    function failure(error) { return { type: itemConstants.CART_ITEMS_FAILURE, payload: error } }    

}


function updateTickets(item_id, amount){
    
    return (dispatch, getState) => {

        itemService.update(item_id, { cantidad_boletos: amount })
            .then(
                data => {

                    const items = getState().items.data

                    const i = items.findIndex(i => i.id == item_id)

                    items[i] = data

                    dispatch(success(items))
                    
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }
    function success(items) { return { type: itemConstants.CART_ITEMS_SUCCESS, payload: items } }
    function failure(error) { return { type: itemConstants.CART_ITEMS_FAILURE, payload: error } }

}