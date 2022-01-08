import axios from 'axios'

export const cartService = {
    get,
    add
}

function add(data = {}) {

    return axios
        .post('/carts/items', data)
        .then(res => {
            const { data } = res

            if (data.success === false) {
                return Promise.reject(res)
            }

            return data.data
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al añadir la exhibición al carrito.')
        ))
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