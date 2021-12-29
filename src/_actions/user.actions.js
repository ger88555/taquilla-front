import { userConstants } from '../_constants'
import { userService } from '../_services'
import {history} from '../_helpers/history'
import { alertActions} from '.'
import { setAuth } from '../_helpers/axios-config'

export const userActions = {
    login,
    //logout,
}


function login(usuario, password){

    
    return dispatch => {

        dispatch(request({ usuario }))

        userService.login(usuario, password)
            .then(
                ({ user, token }) => {
                    localStorage.setItem('user', JSON.stringify(user))
                    dispatch(success(user))

                    setAuth(token)
                    history.push('/')
                    
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            )
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }    

}        
