import { promoConstants } from '../_constants'
import { promoService } from '../_services'

export const promoActions = {
    list,
}


function list(params = {}){

    
    return dispatch => {

        dispatch(request())

        promoService.list(params)
            .then(
                data => {
                    dispatch(success(data))                    
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request() { return { type: promoConstants.PROMOS_REQUEST } }
    function success(data) { return { type: promoConstants.PROMOS_SUCCESS, payload: data } }
    function failure(error) { return { type: promoConstants.PROMOS_FAILURE, payload: error } }    

}

function addPromo(fields){
    dispatch(request())

    promoService.addPromo(fields)
        .then(
            data => {
                dispatch(success(data))                    
            },
            error => {
                dispatch(failure(error))
            }
        )
    function request() { return { type: promoConstants.PROMOS_ADD_REQUEST } }
    function success(data) { return { type: promoConstants.PROMOS_ADD_SUCCESS, payload: data } }
    function failure(error) { return { type: promoConstants.PROMOS_ADD_FAILURE, payload: error } }
}
