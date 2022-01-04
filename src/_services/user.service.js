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
        .then(res => {
            const { data } = res

            if (!data.success) {
                return Promise.reject(res)
            }

            return data
        })
        .catch(err => (            
            Promise.reject( err.data?.message || 'Hubo un error al realizar la solicitud.' )
        ))
    
}
function logout(){
    localStorage.removeItem('user')
}
