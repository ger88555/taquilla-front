import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const middleware = [thunk];

const store  = configureStore({
    rootReducer
})

export default store