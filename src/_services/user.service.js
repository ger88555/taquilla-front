//import { authHeader } from '../_helpers'

export const userService = {
    login,
//    logout,
}

const BASE_URL = process.env.REACT_APP_API_URL + '/users'

function login(usuario, password) {
    const credentials = {
        usuario, 
        password
    } 

    return fetch(BASE_URL + '/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })
        .then(res => {
            if(!res.ok){
                const err = (res && res.message) || res.statusText
                return Promise.reject(err)
            }
            return res.json()
        })
        .then(user => {
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user))
            return user
        })

    
}