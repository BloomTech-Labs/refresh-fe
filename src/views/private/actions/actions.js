import axios from 'axios';

// Action Types
export const FETCH_ALL_USERS_LOADING = 'FETCH_ALL_USERS_LOADING';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILURE = 'FETCH_ALL_USERS_FAILURE';


// Async Action Creators
export const fetchAllUsers = () => dispatch => {
    dispatch({ type: FETCH_ALL_USERS_LOADING })
    axios
        .get(`https://labs-refresh.herokuapp.com/users/`)
        .then(response => dispatch({ type: FETCH_ALL_USERS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: FETCH_ALL_USERS_FAILURE, payload: error }))
}