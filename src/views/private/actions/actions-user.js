import axios from 'axios';
import {axiosWithAuth} from '../../../helpers/axiosWithAuth';
import history from '../../../helpers/history';

export const FETCHING_START = 'FETCHING_START'
export const SET_ERROR = 'SET_ERROR'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const ADD_WATER = 'ADD_WATER'


//login
export const login = (user) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth()
        .post('/users/login', user)
            .then(response => {

                console.log("LOGIN USER DATA: ", response.data.UserInfo)

                //set up to grab teamName from team_id that is given after login, so we can set team name to state to show on dashboard
                let teamName = '';

                if (response.data.UserInfo.team_id !== null) {
                    axios
                        .get(`https://lab23-refresh-be.herokuapp.com/teams/${response.data.UserInfo.team_id}`)
                            .then(response => {
                                console.log("RESPONSE FROM GET TEAM", response)
                                teamName = response.team_name;
                            })
                            .catch(error => {
                                console.log(error)
                            })
                }
                else {
                    teamName = "Team not assigned"
                }
             
                dispatch({ type: LOGIN, payload: {user: response.data.UserInfo, teamName: teamName} })


                //set token to local storage
                window.localStorage.setItem('token', response.data.token)

                history.push('/UserDashboard');
            })
            .catch(error => {
                console.log("ERROR: ", error)
                dispatch({type: SET_ERROR, payload: error})
            })
}

//register
export const register = (user) => dispatch => {
    dispatch({ type: FETCHING_START })
    axios
        .post('https://lab23-refresh-be.herokuapp.com/users/register', user)
            .then(response => {

                //set up to grab teamName from team_id that is given after login, so we can set team name to state to show on dashboard
                let teamName = '';

                if (response.data.UserInfo.team_id !== null) {
                    axios
                        .get(`https://lab23-refresh-be.herokuapp.com/teams/${response.data.UserInfo.team_id}`)
                            .then(response => {
                                console.log("RESPONSE FROM GET TEAM", response)
                                teamName = response.team_name;
                            })
                            .catch(error => {
                                console.log(error)
                            })
                }
                else {
                    teamName = "Team not assigned"
                }
             
                dispatch({ type: LOGIN, payload: {user: response.data.UserInfo, teamName: teamName} })


                //set token to local storage
                window.localStorage.setItem('token', response.data.token)

                history.push('/UserDashboard')
            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })
}


//logout
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
    window.localStorage.clear();
    //history.push('/');
}

//update water metrics, addition 
export const addWater = (increaseNum, userId) => dispatch => {
    console.log("hit addWater")
    dispatch({ type: FETCHING_START })


    //first GET the water metric, in order to know what the current water number is to increase it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {

                axiosWithAuth()
                    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, {water: response.data.water + increaseNum}) 
                        .then(response => {
                            console.log(response)
                            dispatch({ type: ADD_WATER, payload: increaseNum })
            
                        })
                        .catch(error => {
                            dispatch({type: SET_ERROR, payload: error})
                        })

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })




}

// export function addWater (increaseNum) {
//     return (dispatch, getState) => {
//         dispatch({ type: FETCHING_START })
    
//         const test = getState().userReducer;
//         console.log("getState() test", test)
    
//         // axios
//         //     .put(`https://lab23-refresh-be.herokuapp.com/users/${}/metrics`, increaseNum) 
//         //         .then(response => {
    
//         //         })
//         //         .catch(error => {
    
//         //         })
    
//     }
    
//     }