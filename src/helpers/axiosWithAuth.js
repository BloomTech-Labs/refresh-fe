// IMPORTS
// axios
import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
<<<<<<< HEAD
        baseURL: `https://refresh-yo-beta.herokuapp.com/`,
=======
        baseURL: `https://refresh-yo-beta.herokuapp.com`,
>>>>>>> staging
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
};
