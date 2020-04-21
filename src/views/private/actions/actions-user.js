import axios from 'axios';
import {axiosWithAuth} from '../../../helpers/axiosWithAuth';

export const FETCHING_START = 'FETCHING_START'
export const SET_ERROR = 'SET_ERROR'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'


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

export const register = (user) => dispatch => {
    dispatch({ type: FETCHING_START })
    axios
        .post('https://lab23-refresh-be.herokuapp.com/users/register', user)
            .then(response => {
                console.log("register response", response)
                dispatch({ type: REGISTER })
                //history.push('/')
            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })
}
//register