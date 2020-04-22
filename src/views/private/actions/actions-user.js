import axios from 'axios';
import {axiosWithAuth} from '../../../helpers/axiosWithAuth';
import history from '../../../helpers/history';

export const FETCHING_START = 'FETCHING_START'
export const SET_ERROR = 'SET_ERROR'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


//login
export const login = (user) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth()
        .post('/users/login', user)
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
                    teamName = "Unassigned a team"
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
                    teamName = "Unassigned a team"
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