import { exhibitionConstants } from '../_constants'
import { exhibitionService } from '../_services'
import {history} from '../_helpers/history'
import { alertActions } from '.'

export const exhibitionActions = {
    list,
}


function list(params = {}){

    
    return dispatch => {

        dispatch(request())

        exhibitionService.list(params)
            .then(
                data => {
                    dispatch(success(data))
                    history.push('/')
                    
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertActions.error(error.toString()))
                }
            )
    }

    function request() { return { type: exhibitionConstants.EXHIBITIONS_REQUEST } }
    function success(data) { return { type: exhibitionConstants.EXHIBITIONS_SUCCESS, payload: data } }
    function failure(error) { return { type: exhibitionConstants.EXHIBITIONS_FAILURE, payload: error } }    

}        
