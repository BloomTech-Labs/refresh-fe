// IMPORTS
// axios
import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: `https://apidevnow.com`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
};

export default axiosWithAuth