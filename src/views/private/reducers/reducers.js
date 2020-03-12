import {
    FETCH_ALL_USERS_LOADING,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILURE,
    FETCH_USER_LOADING,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    UPDATE_USER_TEAM_START,
    UPDATE_USER_TEAM_SUCCESS,
    UPDATE_USER_TEAM_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
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
            case UPDATE_USER_TEAM_START:
                return {
                    ...state,
                    isFetching: true,
                }
            case UPDATE_USER_TEAM_SUCCESS :
                return {
                    ...state,
                }
            case UPDATE_USER_TEAM_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
            case DELETE_USER_START:
                return {
                    ...state,
                    isFetching: true
                }
            case DELETE_USER_SUCCESS:
                return {
                    ...state,
                }
            case DELETE_USER_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
            case FETCH_USER_LOADING:
                return {
                    ...state,
                    isFetching: true,
                }
            case FETCH_USER_SUCCESS:
                return {
                    ...state,
                    singleUser: action.payload
                }
            case FETCH_USER_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
        default:
            return state;
    }
}

export default reducer;