import React from 'react'
import { Billboard } from '../_components/_views/Billboard'
import { Login } from '../_components/_views/Login'
import { Cart } from '../_components/_views/Cart'
import { Checkout } from '../_components/_views/Checkout'
import { RequireAuth} from '../_components/_common/RequireAuth/RequireAuth'

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
    },

    {
        path: '/pago',
        element: <Checkout />
    },

    {
        path: '/admin',
        element: 
            <RequireAuth rol_id='2'>
                <p>PLACEHOLDER ADMIN</p>
            </RequireAuth>
    },

    {
        path: '/worker',
        element: 
            <RequireAuth rol_id='1'>
                <p>PLACEHOLDER_WORKER</p>
            </RequireAuth>
    }

]

export default routes