import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5500/api/v1',
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