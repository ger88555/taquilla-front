import React from 'react'
import { Billboard } from '../_components/_views/Billboard'
import { Login } from '../_components/_views/Login'
import { Cart } from '../_components/_views/Cart'

const routes = [
    {
        path: '/',
        element: <Billboard />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/carrito',
        element: <Cart />
    }
]

export default routes