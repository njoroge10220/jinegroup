
/** intecepter-will manually intercept any request that is send and it will add correct
headers in that there is no need to write the headers manually in our code **/

import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}) // allows to import anything specified inside an virtual environment file needs to start with VITE

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}` //``-back-ticks=> used to pass strings inside strings
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default api //now api is used in place of axios, api is simplier to use here.

  