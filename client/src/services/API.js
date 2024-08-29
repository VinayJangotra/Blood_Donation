import axios from 'axios'
require("dotenv").config();

const API = axios.create({baseURL :process.env.REACT_APP_BASEURL})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('token')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    return req
})

export default API;