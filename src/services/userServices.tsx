import axios from 'axios';
import axiosInstance from './interceptor';
const API_BASE_URL = 'https://bs.mehal.com.et/api';

export const login = async (username: string, password: string) => {
    try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    if (response.status === 200) {
        // save token and key to local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('key', response.data.key);
        return true
    }
    else {
        return false
    }
}catch (ex) {
    return false
}
};

export const logout = async () => {
    try {
    const response = await axiosInstance.post(`${API_BASE_URL}/logout`);
        // remove token and key from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('key');
    }
    catch (ex) {
        console.log(ex);
    }
};

export const forgotPassword = async (email: string) => {
    const response = await axiosInstance.post(`${API_BASE_URL}/forgot-password`, { email });
    return response.data;
};

export const signup = async (email: string, password: string, phoneNumber: string) => {
    try {
    const response = await axiosInstance.post(`${API_BASE_URL}/signup`, { email, password, phoneNumber });
    return response.status === 200 ? true : false;
    } catch (ex) {
        return false;
    }
};
