import moment from 'moment'
import { readableDays } from '../_constants'

/**
 * Convert the given weekdays array into a human readable string.
 * 
 * @param {Array} weekdays A list of weekdays in 'ddd' format, i.e.: Lun, Mon, Wed
 * @returns {String}
 */
export const toHumanReadable = (weekdays) => weekdays.map(d => readableDays[d]).join(', ')

/**
 * Wether the given weekdays array includes the current day of the week.
 * 
 * @param {Array} weekdays A list of weekdays in 'ddd' format, i.e.: Lun, Mon, Wed
 * @returns {Boolean}
 */
export const hasCurrentDayOfWeek = (weekdays) => {
    const current = moment().locale('en').format('ddd').toLowerCase()

    return weekdays.filter(d => d.toLowerCase() === current).length !== 0
}