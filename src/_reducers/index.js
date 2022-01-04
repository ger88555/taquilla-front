import { combineReducers } from '@reduxjs/toolkit'

import { authentication } from './authentication.reducer'
import { exhibitions } from './exhibitions.reducer'
import { alert } from './alert.reducer'


export default combineReducers({
    authentication,
    exhibitions,
    alert,
})