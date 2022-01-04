import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import routes from '../../../_constants/route.constants'
import {Navigation} from './Navigation'

export const App = () => {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                {routes.map((props, i) => <Route key={i} {...props} />)}
            </Routes>
        </div>
    )
}