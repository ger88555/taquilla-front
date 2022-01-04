import React from 'react'
import { TestRedux } from './TestRedux'
import { App } from '../../_components/_layouts/App'
import { RouterType } from '../../_components/_common/Router'

export const TestApp = () => (
    <TestRedux>
        <RouterType>
            <App />
        </RouterType>
    </TestRedux>
)

export default TestApp