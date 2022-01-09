import axios from 'axios'

export const userService = {
    login,
    logout,
}

function login(usuario, password) {
    const credentials = {
        usuario, 
        password
    }

    return axios.post('/users/login', credentials)
        .then(response => {
            const { data } = response

            if (!data.success) {
                return Promise.reject({ response })
            }

            return data
        })
        .catch(err => (
            Promise.reject( err.response?.data?.message || 'Hubo un error al realizar la solicitud.' )
        ))
    
}
function logout(){
    return axios.delete('/users/logout')
        .then(res => {
            const { data } = res

            if (!data.success) {
                return Promise.reject(res)
            }

            return data
        })
        .catch(() => (
            console.debug('Could not revoke API token.')
        ))
}
