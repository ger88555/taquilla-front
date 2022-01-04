import React from 'react'
import { RouterType } from './RouterType'
import { Routes, Route } from 'react-router-dom'
import routes from '../../../_constants/route.constants'

export const Router = () => (
    <RouterType>
        <Routes>
            {routes.map((props, i) => <Route key={i} {...props} />)}
        </Routes>
    </RouterType>
)