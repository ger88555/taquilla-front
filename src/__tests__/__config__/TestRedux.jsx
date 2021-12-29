import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import ThunkMiddleware  from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from '../../_reducers'

const store = createStore(
    rootReducer, 
    applyMiddleware(
        ThunkMiddleware
    )
)

export const TestRedux = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
)

export default TestRedux