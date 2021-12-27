import { userConstants } from '../_constants'
import { userService } from '../_services'
import {history} from '../_helpers/history'
import { alertActions} from '.'

export const userActions = {
    login,
    //logout,
}


function login(usuario, password){

    
    return dispatch => {

        dispatch(request({ usuario }))

        userService.login(usuario, password)
            .then(
                user => {
                    dispatch(success(user))
                    history.push('/')
                    
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertActions.error(error.toString()))
                }
            )
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }    

}        
