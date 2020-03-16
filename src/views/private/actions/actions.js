import axios from 'axios';

// Action Types
export const FETCH_ALL_USERS_LOADING = 'FETCH_ALL_USERS_LOADING';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILURE = 'FETCH_ALL_USERS_FAILURE';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const FETCH_TEAMS_LOADING = 'FETCH_TEAMS_LOADING';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE';

export const UPDATE_USER_TEAM_START = 'UPDATE_USER_TEAM_START'
export const UPDATE_USER_TEAM_SUCCESS = 'UPDATE_USER_TEAM_SUCCESS'
export const UPDATE_USER_TEAM_FAILURE = 'UPDATE_USER_TEAM_FAILURE'

export const DELETE_USER_START = 'DELETE_USER_START'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

export const CREATE_NEW_TEAM_START = 'CREATE_NEW_TEAM_START'
export const CREATE_NEW_TEAM_SUCCESS = 'CREATE_NEW_TEAM_SUCCESS'
export const CREATE_NEW_TEAM_FAILURE = 'CREATE_NEW_TEAM_FAILURE'

// Async Action Creators
export const fetchAllUsers = () => dispatch => {
    dispatch({ type: FETCH_ALL_USERS_LOADING })
    axios
        .get(`https://labs-refresh.herokuapp.com/users/`)
        .then(response => dispatch({ type: FETCH_ALL_USERS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: FETCH_ALL_USERS_FAILURE, payload: error }))
}

export const updateUserTeam = (userId, editedTeamId) => dispatch => {
    dispatch({ type: UPDATE_USER_TEAM_START })
    axios
        .put(`https://labs-refresh.herokuapp.com/users/${userId}`, editedTeamId)
        .then(response => {
            console.log('updateUserTeam response: ', response)
            dispatch({ type: UPDATE_USER_TEAM_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error }))
}

export const deleteUser = userId => dispatch => {
    dispatch({ type: DELETE_USER_START })
    axios
        .delete(`https://labs-refresh.herokuapp.com/users/${userId}`)
        .then(response => {
            dispatch({ type: DELETE_USER_SUCCESS, payload: response })
        })
        .catch(error => dispatch({ type: DELETE_USER_FAILURE, payload: error }))
}

export const fetchUser = userId => dispatch => {
    dispatch({ type: FETCH_USER_LOADING })
    axios
        .get(`https://labs-refresh.herokuapp.com/users/${userId}`)
        .then(response => {
            dispatch({ type: FETCH_USER_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: FETCH_USER_FAILURE, payload: error }))
    }


export const createNewTeam = (Team) => dispatch => {
    dispatch({ type: CREATE_NEW_TEAM_START })
    axios
        .post(`https://labs-refresh.herokuapp.com/teams/`, Team)
        .then(response => {
            console.log('createNewTeam response: ', response)
            dispatch({ type: CREATE_NEW_TEAM_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: CREATE_NEW_TEAM_FAILURE, payload: error }))
}


