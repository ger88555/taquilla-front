import { createStore, applyMiddleware } from 'redux'
import ThunkMiddleware  from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './_reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        ThunkMiddleware,
        loggerMiddleware
    )
)

export default store