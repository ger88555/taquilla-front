import React from 'react'
import { Billboard } from '../_components/_views/Billboard'
import { Login } from '../_components/_views/Login'
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