import {
    BrowserRouter,
    HashRouter,
} from 'react-router-dom'

/**
 * Get the router type that fits the App configuration
 */
export const RouterType = process.env.REACT_APP_HASH_ROUTES ? HashRouter : BrowserRouter