import axios from 'axios';
import {axiosWithAuth} from '../../../helpers/axiosWithAuth';

export const FETCHING_START = 'FETCHING_START'
export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'


//login
export const login = (user) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth()
        .post('/users/login', user)
            .then(response => {
                dispatch({ type: LOGIN })

                console.log("login response", response)
            })
            .catch(error => {
                console.log("ERROR: ", error)
                dispatch({type: SET_ERROR, payload: error})
            })
}