import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import {Provider} from 'react-redux'
import store from './store'
import * as axiosConfig from './_helpers/axios-config'

import { App } from './_components/_layouts/App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'moment/locale/es-mx'
import {RouterType} from './_components/_common/Router'

const rootElement = document.getElementById('root')

axiosConfig.setUp()

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterType>
                <App />
            </RouterType>
        </React.StrictMode>
    </Provider>,
    rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()