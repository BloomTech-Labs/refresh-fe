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
export const UPDATE_BREAKS = 'UPDATE_BREAKS'
export const UPDATE_POINTS = 'UPDATE_POINTS'


//login
export const login = (user) => dispatch => {
    dispatch({ type: FETCHING_START })
    axiosWithAuth()
        .post('/users/login', user)
            .then(response => {

                console.log("LOGIN USER DATA: ", response)

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
                console.log("ERROR FROM REGISTER", error)
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
export const addSleep = (increaseNum, userId, dailyPoints, totalPoints) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the sleep metric, in order to know what the current sleep number is to increase it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {


                //call helper function to find out how many points to update by
                const pointsToUpdate = updatePointsSleep(response.data.sleep, 6, 'add');

                console.log("response.data.daily_points: ", dailyPoints);
                console.log("pointsToUpdate: ", pointsToUpdate);

                //make the PUT request to update sleep metric on the back end, then dispatch the action to update state on the front end
                axiosWithAuth()
                    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, 
                        {sleep: response.data.sleep + increaseNum, 
                         daily_points: dailyPoints + pointsToUpdate, 
                         total_points: totalPoints + pointsToUpdate}) 
                            .then(response => {
                                dispatch({ type: UPDATE_SLEEP, payload: increaseNum })

                                dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate })
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
export const subtractSleep = (decreaseNum, userId, dailyPoints, totalPoints) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the sleep metric, in order to know what the current sleep number is to decrease it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {
                //check to make sure sleep metric isn't currently at 0, to avoid negative metric input
                if (response.data.sleep != 0) {


                    //call helper function to find out how many points to update by
                    const pointsToUpdate = updatePointsSleep(response.data.sleep, 6, 'subtract');

                       //make the PUT request to update sleep metric on the back end, then dispatch the action to update state on the front end
                        axiosWithAuth()
                            .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, 
                                {sleep: response.data.sleep + decreaseNum,
                                 daily_points: dailyPoints + pointsToUpdate, 
                                 total_points: totalPoints + pointsToUpdate}) 
                                    .then(response => {
                                        dispatch({ type: UPDATE_SLEEP, payload: decreaseNum })

                                        dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate })
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
export const addExercise= (increaseNum, userId, dailyPoints, totalPoints) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the exercise metric, in order to know what the current exercise number is to increase it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {
                
                //call helper function to find out how many points to update by
                const pointsToUpdate = updatePointsExercise(response.data.exercise, 4, 'add', increaseNum);

                //make the PUT request to update exercise metric on the back end, then dispatch the action to update state on the front end
                axiosWithAuth()
                    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, 
                        {exercise: response.data.exercise + increaseNum,
                         daily_points: dailyPoints + pointsToUpdate, 
                         total_points: totalPoints + pointsToUpdate}) 
                        .then(response => {
                            dispatch({ type: UPDATE_EXERCISE, payload: increaseNum })
                            
                            dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate })
                        })
                        .catch(error => {
                            dispatch({type: SET_ERROR, payload: error})
                        })

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })

}

//update exercise metrics, subtraction
export const subtractExercise = (decreaseNum, userId, dailyPoints, totalPoints) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the exercise metric, in order to know what the current exercise number is to decrease it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {
                //check to make sure exercise metric isn't currently at 0, to avoid negative metric input
                if (response.data.exercise != 0) {
                           
                        //call helper function to find out how many points to update by
                        const pointsToUpdate = updatePointsExercise(response.data.exercise, 4, 'subtract', decreaseNum);

                       //make the PUT request to update exercise metric on the back end, then dispatch the action to update state on the front end
                        axiosWithAuth()
                            .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, 
                                {exercise: response.data.exercise + decreaseNum,
                                 daily_points: dailyPoints + pointsToUpdate, 
                                 total_points: totalPoints + pointsToUpdate}) 
                                .then(response => {
                                    dispatch({ type: UPDATE_EXERCISE, payload: decreaseNum })

                                    dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate })
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

//update breaks metrics, addition 
export const addBreaks= (increaseNum, userId, dailyPoints, totalPoints) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the breaks metric, in order to know what the current breaks number is to increase it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {

                //call helper function to find out how many points to update by
                const pointsToUpdate = updatePointsBreaks(response.data.breaks, 4, 'add', increaseNum);

                //make the PUT request to update breaks metric on the back end, then dispatch the action to update state on the front end
                axiosWithAuth()
                    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, 
                    {breaks: response.data.breaks + increaseNum,
                     daily_points: dailyPoints + pointsToUpdate, 
                     total_points: totalPoints + pointsToUpdate}) 
                        .then(response => {
                            dispatch({ type: UPDATE_BREAKS, payload: increaseNum })

                            dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate })
                        })
                        .catch(error => {
                            dispatch({type: SET_ERROR, payload: error})
                        })

            })
            .catch(error => {
                dispatch({type: SET_ERROR, payload: error})
            })

}

//update breaks metrics, subtraction
export const subtractBreaks = (decreaseNum, userId, dailyPoints, totalPoints) => dispatch => {
    dispatch({ type: FETCHING_START })

    //first GET the breaks metric, in order to know what the current breaks number is to decrease it by
    axiosWithAuth()
        .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`)
            .then(response => {
                //check to make sure breaks metric isn't currently at 0, to avoid negative metric input
                if (response.data.breaks != 0) {

                    //call helper function to find out how many points to update by
                    const pointsToUpdate = updatePointsBreaks(response.data.breaks, 4, 'subtract', decreaseNum);

                       //make the PUT request to update breaks metric on the back end, then dispatch the action to update state on the front end
                        axiosWithAuth()
                            .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}/metrics`, 
                            {breaks: response.data.breaks + decreaseNum,
                             daily_points: dailyPoints + pointsToUpdate, 
                             total_points: totalPoints + pointsToUpdate}) 
                                .then(response => {
                                    dispatch({ type: UPDATE_BREAKS, payload: decreaseNum })

                                    dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate })
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


//update points for sleep helper function
function updatePointsSleep (metricNum, goal, operation) {

    let pointsToAdd = 0;

    //update points only if at or below goal
    if (metricNum <= goal) {

        //check to see what operation is requested, and update points accordingly
        if (operation === 'add') {
            // +1 point for sleep metrics 0-2
            if (metricNum <= 2) {
                pointsToAdd = 1;
            }
            // +2 point for sleep metrics 3-4
            else if (metricNum >= 3 && metricNum <= 4) {
                pointsToAdd = 2;
            }
            // +3 points for sleep metrics 5
            else if (metricNum == 5) {
                pointsToAdd = 3
            }
        }
        else if (operation === 'subtract') {

            // -1 point for sleep metrics 1-3
            if (metricNum <= 3) {
                pointsToAdd = -1;
            }
            // -2 point for sleep metrics 4-5
            else if (metricNum >= 4 && metricNum <= 5) {
                pointsToAdd = -2;
            }
            // -3 points for sleep metrics 6
            else if (metricNum == 6) {
                pointsToAdd = -3
            }
        }

    }

    return pointsToAdd;
}

//update points for exercise helper function
function updatePointsExercise (metricNum, goal, operation, changeInMetric) {

    let pointsToAdd = 0;
    let currentMetricNum = metricNum / Math.abs(changeInMetric); //(divide metricNum by changeInMetric, since exercise is currently measured in intervals of 15)

    //update points only if at or below goal 
    if (currentMetricNum / Math.abs(changeInMetric) <= goal) {

        //check to see what operation is requested, and update points accordingly
        if (operation === 'add') {
            // +1 point for exercise metric 0
            if (currentMetricNum == 0 ) {
                pointsToAdd = 1;
            }
            // +2 point for exercise metrics 1
            else if (currentMetricNum == 1) {
                pointsToAdd = 2;
            }
            // +3 point for exercise metrics 2
            else if (currentMetricNum == 2 ) {
                pointsToAdd = 3;
            }
            // +4 points for exercise metrics 3
            else if (currentMetricNum == 3) {
                pointsToAdd = 4;
            }
        }
        else if (operation === 'subtract') {

            // -1 point for exercise metric 1
            if (currentMetricNum == 1 ) {
                pointsToAdd = -1;
            }
            // -2 point for exercise metrics 2
            else if (currentMetricNum == 2) {
                pointsToAdd = -2;
            }
            // -3 point for exercise metrics 3
            else if (currentMetricNum == 3 ) {
                pointsToAdd = -3;
            }
            // -4 points for exercise metrics 4
            else if (currentMetricNum == 4) {
                pointsToAdd = -4;
            }
        }

    }

    return pointsToAdd;
}

//update points for sleep helper function
function updatePointsBreaks (metricNum, goal, operation) {

    let pointsToAdd = 0;

    //update points only if at or below goal
    if (metricNum <= goal) {

        //check to see what operation is requested, and update points accordingly
        if (operation === 'add') {
            // +1 point for breaks metric 0 
            if (metricNum == 0 ) {
                pointsToAdd = 1;
            }
            // +2 point for breaks metric 1
            else if (metricNum == 1) {
                pointsToAdd = 2;
            }
            // +3 point for breaks metrics 2
            else if (metricNum == 2 ) {
                pointsToAdd = 3;
            }
            // +4 points for breaks metrics 3
            else if (metricNum == 3) {
                pointsToAdd = 4;
            }
        }
        else if (operation === 'subtract') {

            // -1 point for breaks metric 1
            if (metricNum == 1 ) {
                pointsToAdd = -1;
            }
            // -2 point for breaks metric 2
            else if (metricNum == 2) {
                pointsToAdd = -2;
            }
            // -3 point for breaks metric 3
            else if (metricNum == 3 ) {
                pointsToAdd = -3;
            }
            // -4 points for breaks metric 4
            else if (metricNum == 4) {
                pointsToAdd = -4;
            }
        }
    }

    return pointsToAdd;
}