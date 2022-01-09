import { userConstants } from '../_constants'
import { userService } from '../_services'
import { setAuth } from '../_helpers/axios-config'

export const userActions = {
    restore,
    login,
    logout,
}

function restore(){
    return dispatch => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user && user.token) {
            dispatch(success(user))
            setAuth(user.token)
        }

    }
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
                    
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }  

}

function logout(){
    userService.logout()

    localStorage.removeItem('user')
    setAuth(null)

    return { type: userConstants.LOGOUT }
}

function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }