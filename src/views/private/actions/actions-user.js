import axios from 'axios';
import {axiosWithAuth} from '../../../helpers/axiosWithAuth';
import history from '../../../helpers/history';

export const FETCHING_START = 'FETCHING_START'
export const SET_ERROR = 'SET_ERROR'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_WATER = 'UPDATE_WATER'
export const UPDATE_SLEEP = 'UPDATE_SLEEP'
export const UPDATE_EXERCISE = 'UPDATE_EXERCISE'


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
    dispatch({ type: FETCHING_START })

    //first GET the water metric, in order to know what the current water number is to increase it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {

                //make the PUT request to update water metric on the back end, then dispatch the action to update state on the front end
                axiosWithAuth()
                    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, {water: response.data.water + increaseNum}) 
                        .then(response => {
                            dispatch({ type: UPDATE_WATER, payload: increaseNum })
            
                        })
                        .catch(error => {
                            dispatch({type: SET_ERROR, payload: error})
                        })

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })

}

//update water metrics, subtraction
export const subtractWater = (decreaseNum, userId) => dispatch => {
    console.log("hit subtractWater")
    dispatch({ type: FETCHING_START })

    //first GET the water metric, in order to know what the current water number is to decrease it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {

                //check to make sure water metric isn't currently at 0, to avoid negative metric input
                if (response.data.water != 0) {

                       //make the PUT request to update water metric on the back end, then dispatch the action to update state on the front end
                        axiosWithAuth()
                            .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, {water: response.data.water + decreaseNum}) 
                                .then(response => {
                                    dispatch({ type: UPDATE_WATER, payload: decreaseNum })
                    
                                })
                                .catch(error => {
                                    dispatch({type: SET_ERROR, payload: error})
                                })
                }

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })

}

//update sleep metrics, addition 
export const addSleep = (increaseNum, userId) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the sleep metric, in order to know what the current sleep number is to increase it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {

                //make the PUT request to update sleep metric on the back end, then dispatch the action to update state on the front end
                axiosWithAuth()
                    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, {sleep: response.data.sleep + increaseNum}) 
                        .then(response => {
                            dispatch({ type: UPDATE_SLEEP, payload: increaseNum })
                        })
                        .catch(error => {
                            dispatch({type: SET_ERROR, payload: error})
                        })

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })

}

//update sleep metrics, subtraction
export const subtractSleep = (decreaseNum, userId) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the sleep metric, in order to know what the current sleep number is to decrease it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {
                //check to make sure sleep metric isn't currently at 0, to avoid negative metric input
                if (response.data.sleep != 0) {

                       //make the PUT request to update sleep metric on the back end, then dispatch the action to update state on the front end
                        axiosWithAuth()
                            .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, {sleep: response.data.sleep + decreaseNum}) 
                                .then(response => {
                                    dispatch({ type: UPDATE_SLEEP, payload: decreaseNum })
                                })
                                .catch(error => {
                                    dispatch({type: SET_ERROR, payload: error})
                                })
                }

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })

}

//update exercise metrics, addition 
export const addExercise= (increaseNum, userId) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the exercise metric, in order to know what the current exercise number is to increase it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {

                //make the PUT request to update exercise metric on the back end, then dispatch the action to update state on the front end
                axiosWithAuth()
                    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, {exercise: response.data.exercise + increaseNum}) 
                        .then(response => {
                            console.log(response)
                            dispatch({ type: UPDATE_EXERCISE, payload: increaseNum })
                        })
                        .catch(error => {
                            dispatch({type: SET_ERROR, payload: error})
                        })

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })

}