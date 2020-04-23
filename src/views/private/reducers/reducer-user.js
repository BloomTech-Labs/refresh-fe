import {
    FETCHING_START,
    SET_ERROR,
    LOGIN,
    LOGOUT, 
    ADD_WATER
} from '../actions/actions-user.js';


const initialState = {
    isFetching: false,
    error: null,
    fullName: '',
    userId: null,
    avatar: null,
    points: 0,
    admin: false,
    water: 0,
    exercise: 0,
    breaks: 0,
    sleep: 0,
    team_id: 0,
    teamName: ''
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_START: 
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case SET_ERROR: 
            return {
                ...state, 
                error: action.payload,
                isFetching: false
            }
        case LOGIN: 
            return {
                ...state,
                isFetching: false,
                fullName: action.payload.user.full_name,
                userId: action.payload.user.id,
                avatar: action.payload.user.avatar,
                points: action.payload.user.points,
                admin: action.payload.user.admin,
                water: action.payload.user.water,
                exercise: action.payload.user.exercise,
                breaks: action.payload.user.breaks,
                sleep: action.payload.user.sleep,
                team_id: action.payload.user.team_id,
                teamName: action.payload.teamName
            }
        case LOGOUT: 
            return {
                isFetching: false,
                error: null,
                fullName: '',
                avatar: null,
                points: 0,
                admin: false,
                water: 0,
                exercise: 0,
                breaks: 0,
                sleep: 0,
                team_id: 0
            }
        case ADD_WATER: 
            return {
                ...state, 
                water: state.water + action.payload
            }
        default: 
            return state;
    }
}

export default reducer