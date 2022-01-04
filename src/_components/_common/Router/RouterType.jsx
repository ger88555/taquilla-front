import {
    BrowserRouter,
    HashRouter,
} from 'react-router-dom'

const shouldHash = JSON.parse(process.env.REACT_APP_HASH_ROUTES || false)

/**
 * Get the router type that fits the App configuration
 */
export const RouterType = shouldHash ? HashRouter : BrowserRouter