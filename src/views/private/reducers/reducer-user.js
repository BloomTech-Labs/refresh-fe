import {
    FETCHING_START,
    SET_ERROR,
    LOGIN,
    REGISTER
} from '../actions/actions-user.js';


const initialState = {
    isFetching: false,
    fullName: '',
    error: null
}


export const reducer = (state = initialState, action) => {
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
                isFetching: false
                //fullName: action.payload.full_name
            }
        case REGISTER: {
            return {
                ...state,
                isFetching: false
                //fullName: action.payload.full_name
            }
        }
        case LOGOUT: {
            return {
                isFetching: false,
                fullName: '',
                error: null
            }
        }
        default: 
            return state;
    }
}

