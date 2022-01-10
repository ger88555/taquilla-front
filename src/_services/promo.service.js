import axios from 'axios'
import { toHumanReadable } from '../_helpers/timestamps'

export const promoService = {
    list,
    addPromo
}

const parsePromo = ({ vigencia, ...rest }) => ({
    ...rest,
    discount_text: `${rest.cantidad} x ${rest.porcentaje * 100}%`,
    vigencia: toHumanReadable(vigencia),
})

function list(params = {}) {

    return axios
        .get('/promociones', { params })
        .then(res => {
            const { data } = res

            if (data.success === false) {
                return Promise.reject(res)
            }

            return data.data.map(parsePromo)
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al realizar la solicitud.')
        ))
}

function addPromo(fields = {}){
    return axios
        .post('/promociones', fields)
        .then(res => {
            const { data } = res

            if (data.success === false) {
                return Promise.reject(res)
            }

            return data.data.map(parsePromo)
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al realizar la solicitud.')
        ))
}