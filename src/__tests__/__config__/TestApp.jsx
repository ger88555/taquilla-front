import React from 'react'
import { TestRedux } from './TestRedux'
import { App } from '../../_components/_layouts/App'

export const TestApp = () => (
    <TestRedux>
        <App />
    </TestRedux>
)

export default TestApp