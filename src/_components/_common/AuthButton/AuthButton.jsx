import React, { useCallback } from 'react'

import { Button } from 'react-bootstrap'

import { connect } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { userActions } from '../../../_actions'

const AuthButton = ({ loggedIn, logout }) => {
    const navigate = useNavigate()
    const getLabel = useCallback(() => loggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión', [loggedIn])
    
    const clickHandler = useCallback(() => loggedIn ? logout() : navigate('/login'), [loggedIn])

    return (
        <Button
            variant="primary"
            size='lg'
            onClick={clickHandler}>
            {getLabel()}
        </Button>
    )
}

const connectedAuthButton = connect(state => state.authentication, { ...userActions })(AuthButton)

export { connectedAuthButton as AuthButton }
