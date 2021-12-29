export const exhibitionService = {
    list,
}

const BASE_URL = process.env.REACT_APP_API_URL + '/exhibitions'

function list(params = {}) {


    return fetch(BASE_URL + '?' + new URLSearchParams(params), {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(res => {
            if(res.success === false){
                return Promise.reject(res.message || res)
            }

            return res.data
        })
        .catch(err => (
            Promise.reject( err.message || err.statusText )
        ))
}