import {
    FETCHING_START,
    SET_ERROR,
    LOGIN,
    LOGOUT, 
    UPDATE_WATER,
    UPDATE_SLEEP,
    UPDATE_EXERCISE,
    UPDATE_BREAKS,
    UPDATE_POINTS
} from '../actions/actions-user.js';


const initialState = {
    isFetching: false,
    error: null,
    fullName: '',
    userId: null,
    avatar: null,
    totalPoints: 0,
    dailyPoints: 0,
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
                totalPoints: action.payload.user.total_points,
                dailyPoints: action.payload.user.daily_points,
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
        case UPDATE_WATER: 
            return {
                ...state, 
                water: state.water + action.payload
            }
        case UPDATE_SLEEP:
            return {
                ...state,
                sleep: state.sleep + action.payload
            }
        case UPDATE_EXERCISE:
            return {
                ...state,
                exercise: state.exercise + action.payload
            }
        case UPDATE_BREAKS:
            return {
                ...state,
                breaks: state.breaks + action.payload
            }
        case UPDATE_POINTS: {
            return {
                ...state,
                dailyPoints: state.dailyPoints + action.payload,
                totalPoints: state.totalPoints + action.payload
            }
        }
        default: 
            return state;
    }
}

export default reducer