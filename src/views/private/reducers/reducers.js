import {
    FETCH_ALL_USERS_LOADING,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILURE
} from '../actions/actions';

const initialState = {
    allUsers: [],
    singleUser: {},
    isFetching: false,
    error: null
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALL_USERS_LOADING:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                allUsers: action.payload
            }
        case FETCH_ALL_USERS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;