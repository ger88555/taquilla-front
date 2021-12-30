import moment from 'moment'

export const toHumanReadable = (str) => moment(str).format('DD/MMMM/YYYY').toUpperCase()