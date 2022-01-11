import { exhibitionConstants } from '../_constants'
import { exhibitionService, promoService } from '../_services'

export const exhibitionActions = {
    list,
    editPrice
}

const addPromosToList = async (exhibitions) => {
    const promos = await promoService.list()

    for (const exh of exhibitions) {
        exh.promos = promos.filter(p => p.exhibicion_id == exh.id)
    }
    
    return exhibitions
}


function list(params = {}){

    
    return dispatch => {

        dispatch(request())

        exhibitionService.list(params)
            .then(addPromosToList)
            .then(
                data => {
                    dispatch(success(data))                    
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request() { return { type: exhibitionConstants.EXHIBITIONS_REQUEST } }
    function success(data) { return { type: exhibitionConstants.EXHIBITIONS_SUCCESS, payload: data } }
    function failure(error) { return { type: exhibitionConstants.EXHIBITIONS_FAILURE, payload: error } }    

}

function editPrice(id, data={}){
    return dispatch => {
        dispatch(request())

        exhibitionService.editPrice(id, data)
            .then(
                data => {
                    dispatch(success(data))
                },
                error => {
                    dispatch(failure(error))
                }
            )
        
    }
    function request() { return { type: exhibitionConstants.EXHIBITIONS_EDIT_REQUEST, payload: {id, data}} }
    function success(data) { return { type: exhibitionConstants.EXHIBITIONS_EDIT_SUCCESS, payload: data } }
    function failure(error) { return { type: exhibitionConstants.EXHIBITIONS_EDIT_FAILURE, payload: error } }  
}