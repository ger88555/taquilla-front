import axios from 'axios'
import { toHumanReadable } from '../_helpers/timestamps'

export const promoService = {
    list,
}

const parsePromo = ({ vigencia, dias_semana, ...rest }) => ({
    ...rest,
    dias_semana,
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