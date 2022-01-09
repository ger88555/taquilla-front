import { userConstants } from '../_constants/user.constants'

const initialState = {
    user: {},
    loggedIn: false,
    error: null
}

export const authentication = (state = initialState, action) => {
    switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
            ...initialState,
            loggedIn: false
        }

    case userConstants.LOGIN_SUCCESS:
        return {
            ...initialState,
            loggedIn: true,
            user: action.user
        }

    case userConstants.LOGIN_FAILURE:
        return {
            ...initialState,
            error: action.error
        }

    case userConstants.LOGOUT:
        return initialState

    default:
        return state

    }
}