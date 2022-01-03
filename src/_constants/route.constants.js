import React from 'react'
import { Billboard } from '../_components/_views/Billboard'
import { Login } from '../_components/_views/Login'

const routes = [
    {
        path: '/',
        element: <Billboard />
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default routes