const API_URL = 'http://localhost:8080/users/login'

const login = function (user, password) {
    const credentials = {
        user, 
        password
    } 

    fetch('API_URL', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })
        .then(res => {
            if(res.data.token){
               localStorage.setItem("user", K) 
            }
            return res.data
        })
}

export default login