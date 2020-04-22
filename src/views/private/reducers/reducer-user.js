import {
    FETCHING_START,
    SET_ERROR,
    LOGIN,
    REGISTER,
    LOGOUT
} from '../actions/actions-user.js';


const initialState = {
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
                fullName: action.payload.full_name,
                avatar: action.payload.avatar,
                points: action.payload.points,
                admin: action.payload.admin,
                water: action.payload.water,
                exercise: action.payload.exercise,
                breaks: action.payload.breaks,
                sleep: action.payload.sleep,
                team_id: action.payload.team_id
            }
        case REGISTER: 
            return {
                ...state,
                isFetching: false,
                fullName: action.payload.full_name,
                avatar: action.payload.avatar,
                points: action.payload.points,
                admin: action.payload.admin,
                water: action.payload.water,
                exercise: action.payload.exercise,
                breaks: action.payload.breaks,
                sleep: action.payload.sleep,
                team_id: action.payload.team_id
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
        default: 
            return state;
    }
}

export default reducer