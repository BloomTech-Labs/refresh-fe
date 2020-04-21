import {
    FETCHING_START,
    LOGIN,
    SET_ERROR
} from '../actions/actions-user.js';


const initialState = {
    isFetching: false,
    userEmail: '',
    userPassword: '',
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
        case LOGIN: 
            return {
                ...state
                //userEmail: action.payload.username
                //userPassword: action.payload.userPassword
            }
        case SET_ERROR: 
            return {
                ...state, 
                error: action.payload,
                isFetching: false
            }
    }
}

