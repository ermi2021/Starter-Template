import axios from 'axios';

const API_BASE_URL = 'https://bs.mehal.com.et/api';

export const login = async (username: string, password: string) => {
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

};

export const logout = async () => {
    const response = await axios.post(`${API_BASE_URL}/logout`);
    if (response.status === 200) {
        // remove token and key from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('key');
    }

    return response.data;
};

export const forgotPassword = async (email: string) => {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
    return response.data;
};

export const signup = async (email: string, password: string, name: string) => {
    const response = await axios.post(`${API_BASE_URL}/signup`, { email, password, name });
    return response.data;
};