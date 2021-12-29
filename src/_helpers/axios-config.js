import axios from 'axios'

export const setUp = () => {
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    const BASE_URL = process.env.REACT_APP_API_URL || 'localhost:8000'
    
    axios.defaults.baseURL = BASE_URL
}

export const setAuth = (token = null) => {
    if (!token) {
        delete axios.defaults.headers.common['Authorization']
    } else {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
}