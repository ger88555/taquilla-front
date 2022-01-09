import axios from 'axios'

export const itemService = {
    list,
    add,
    update
}

function list(cart_id) {

    return axios
        .get(`/carts/${cart_id}/items`)
        .then(res => {
            const { data } = res

            if (data.success === false) {
                return Promise.reject(res)
            }

            return data.data
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al solicitar los datos del carrito.')
        ))
}

function add(data = {}) {

    return axios
        .post('carts/items', data)
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

function update(id, data = {}) {

    return axios
        .put(`/carts/items/${id}`, data)
        .then(res => {
            const { data } = res

            if (data.success === false) {
                return Promise.reject(res)
            }

            return data.data
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al actualizar los datos del carrito.')
        ))
}