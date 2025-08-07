import axios from 'axios';

const api = axios.create({
    baseURL:'https://wcfmvw9r-5500.inc1.devtunnels.ms/api/v1' ,
    headers:{
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use(
  (config) => {
    const stored = localStorage.getItem('auth-storage');
    const token = stored ? JSON.parse(stored)?.state?.token : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;