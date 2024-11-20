import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Assuming your backend runs on port 8080

export const loginUser = async (username, password) => {
    return await axios.post(`${BASE_URL}/auth/login`, { username, password });
};
    
export const signupUser = async (username, password) => {
    return await axios.post(`${BASE_URL}/auth/signup`, { username, password });
};

export const searchImages = async (responseCode) => {
    return await axios.get(`${BASE_URL}/search?code=${responseCode}`);
};

export const saveList = async (listData) => {
    return await axios.post(`${BASE_URL}/lists`, listData);
};

export const getSavedLists = async (userId) => {
    return await axios.get(`${BASE_URL}/lists?userId=${userId}`);
};

export const deleteList = async (listId) => {
    return await axios.delete(`${BASE_URL}/lists/${listId}`);
};
    