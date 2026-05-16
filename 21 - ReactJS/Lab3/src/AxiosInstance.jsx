import axios from 'axios';

export const instance = axios.create({
    baseURL : "https://fakestoreapi.com/products" 
})


instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('userToken'); 
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);