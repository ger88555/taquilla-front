import { cartConstants } from '../_constants'
import { cartService } from '../_services'

export const cartActions = {
    get,
}


function get(id){

    
    return dispatch => {

        dispatch(request())

        cartService.get(id)
            .then(
                data => {
                    // Save the cart id for future page loads.
                    localStorage.setItem('cart_id', id)

                    dispatch(success(data))
                    
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request() { return { type: cartConstants.CART_REQUEST } }
    function success(data) { return { type: cartConstants.CART_SUCCESS, payload: data } }
    function failure(error) { return { type: cartConstants.CART_FAILURE, payload: error } }    

}
