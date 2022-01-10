import download from 'js-file-download'
import axios from 'axios'

export const cartService = {
    get,
    pay,
    getTickets
}

function get(id) {

    return axios
        .get(`/carts/${id}`)
        .then(res => {
            const { data } = res

            if (data.success === false) {
                return Promise.reject(res)
            }

            return data.data
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al solicitar los datos del pedido.')
        ))
}

function pay(id, fields){
    
    return axios
        .put(`/carts/${id}/pay`, fields)
        .then(res => {
            const { data } = res
            if (data.success === false) {
                return Promise.reject(res)
            }

            return data.data
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al solicitar los datos del pedido.')
        ))
}

function getTickets(id) {

    return axios
        .get(`/carts/${id}/downloads/tickets`, { responseType: 'blob' })
        .then(res => {
            const { data } = res

            if (data.success === false) {
                return Promise.reject(res)
            }

            download(data, 'boletos.zip')
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al solicitar los boletos del pedido. Intente de nuevo en esta página más tarde.')
        ))
}