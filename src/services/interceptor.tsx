import axios from 'axios';

const API_BASE_URL = 'https://bs.mehal.com.et/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});
axiosInstance.interceptors.request.use((config) => {
  // Global request interceptor logic
  // add header bearer token here
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

  // add key-value pairs stored in local storage as params to every API request
  const params = localStorage.getItem('key');
  if (params) {
    config.params = { ...config.params, ...{key: params} };
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Global response interceptor logic 
    return response.data;
  },
  (error) => {
    // Global error handling logic
    // if api's return 401 clear all local storage and cache
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;