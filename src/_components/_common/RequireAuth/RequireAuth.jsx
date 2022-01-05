import React from 'react'
import { Login } from '../../_views/Login'

// import {
//     // useNavigate,
// } from 'react-router-dom'
        
import { 
    useSelector, 
} from 'react-redux'

function RequireAuth(props){
    const {loggedIn, user} = useSelector(state => state.authentication)
    const role_id = user.rol_id
    const id = props.user_id
    console.log(loggedIn, role_id, id)

    if (!loggedIn){
        return <Login/>
    return props.children
}

export {RequireAuth}