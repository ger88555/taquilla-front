import React from 'react'
import { Login } from '../../_views/Login'

// import {
//     // useNavigate,
// } from 'react-router-dom'
        
import { 
    useSelector, 
} from 'react-redux'

function RequireAuth(props){
    const loggedIn = useSelector(state => state.authentication.loggedIn)
    const user_id = loggedIn ? useSelector(state => state.user.rol_id): false
    const id = props.user_id
    console.log(loggedIn, user_id)

    if (!loggedIn || user_id != id){
        return <Login/>
    }
    return props.children
}

export {RequireAuth}