import React from 'react'
import './App.css'
import { Login } from '../../_views/Login'
import { Billboard } from '../../_views/Billboard'
import {
    BrowserRouter,
    Routes,
    Route,
    // Link
} from 'react-router-dom'

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cartelera' element={<Billboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}