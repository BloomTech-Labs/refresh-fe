import axios from 'axios';

export const axiosWithAuthMulti = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: `https://labs-refresh.herokuapp.com/`,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `${token}`
        }
    });
};