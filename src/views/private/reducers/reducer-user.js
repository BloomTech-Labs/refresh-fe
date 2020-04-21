import {
    FETCHING_START,
    SET_ERROR,
    LOGIN,
    REGISTER
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
        case SET_ERROR: 
            return {
                ...state, 
                error: action.payload,
                isFetching: false
            }
        case LOGIN: 
            return {
                ...state
                //userEmail: action.payload.username
                //userPassword: action.payload.userPassword
            }
        case REGISTER: {
            return {
                ...state,
                isFetching: false
            }
        }

    }
}

