// IMPORTS
// axios
import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: `http://localhost:8080`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
};

//https://refresh-yo-beta.herokuapp.com