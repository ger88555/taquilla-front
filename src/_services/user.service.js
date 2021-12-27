//import { authHeader } from '../_helpers'

export const userService = {
    login,
//    logout,
}

const API_URL = 'http://192.168.0.22:3000/users/login'

function login(usuario, password) {
    const credentials = {
        usuario, 
        password
    } 

    return fetch(API_URL, {
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