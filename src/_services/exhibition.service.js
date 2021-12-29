import axios from 'axios'

export const exhibitionService = {
    list,
}

function list(params = {}) {

    return axios
        .get('/exhibitions', { params })
        .then(res => {
            const { data } = res
            
            if(data.success === false){
                return Promise.reject(res)
            }

            return data.data
        })
        .catch(err => (
            Promise.reject( err.data?.data?.message || 'Hubo un error al realizar la solicitud.' )
        ))
}