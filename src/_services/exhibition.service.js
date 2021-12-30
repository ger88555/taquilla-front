import axios from 'axios'
import { toHumanReadable } from '../_helpers/timestamps'

export const exhibitionService = {
    list,
}

const parseExhibition = ({ desde, hasta, ...rest }) => ({
    ...rest,
    desde: toHumanReadable(desde),
    hasta: toHumanReadable(hasta)
})

function list(params = {}) {

    return axios
        .get('/exhibitions', { params })
        .then(res => {
            const { data } = res

            if (data.success === false) {
                return Promise.reject(res)
            }

            return data.data.map(parseExhibition)
        })
        .catch(err => (
            Promise.reject(err.data?.message || 'Hubo un error al realizar la solicitud.')
        ))
}