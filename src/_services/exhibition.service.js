import axios from 'axios'
import moment from 'moment'

export const exhibitionService = {
    list,
}

const parseExhibition = ({ desde, hasta, ...rest }) => ({
    ...rest,
    desde: moment(desde).format('DD/MMMM/YYYY').toUpperCase(),
    hasta: moment(hasta).format('DD/MMMM/YYYY').toUpperCase()
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