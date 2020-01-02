// IMPORTS
// axios
import axios from 'axios';
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `https://refresh-yo-beta.herokuapp.com`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
};