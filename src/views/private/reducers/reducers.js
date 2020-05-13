import {
  FETCH_ALL_USERS_LOADING,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_TEAMS_LOADING,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FETCH_USER_TEAM_NAME_LOADING,
  FETCH_USER_TEAM_NAME_SUCCESS,
  FETCH_USER_TEAM_NAME_FAILURE,
  UPDATE_USER_TEAM_START,
  UPDATE_USER_TEAM_SUCCESS,
  UPDATE_USER_TEAM_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  CREATE_NEW_TEAM_START,
  CREATE_NEW_TEAM_SUCCESS,
  CREATE_NEW_TEAM_FAILURE,
  DELETE_TEAM_START,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_FAILURE,
  UPDATE_TEAM_NAME_START,
  UPDATE_TEAM_NAME_SUCCESS,
  UPDATE_TEAM_NAME_FAILURE,
  UPDATE_TEAM_POINTS
} from "../actions/actions";

const initialState = {
  teamName: {},
  teams: [],
  allUsers: [],
  singleUser: {},
  isFetching: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_USERS_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_USER_TEAM_START:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_USER_TEAM_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_USER_TEAM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_USER_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        singleUser: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_NEW_TEAM_START:
      return {
        ...state,
        isFetching: true,
      };
    case CREATE_NEW_TEAM_SUCCESS:
      return {
        ...state,
        teams: action.payload,
      };
    case CREATE_NEW_TEAM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_TEAMS_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.payload,
      };
    case FETCH_TEAMS_FAILURE:
    case DELETE_TEAM_START:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_TEAM_SUCCESS:
      return {
        ...state,
      };
    case DELETE_TEAM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_USER_TEAM_NAME_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_TEAM_NAME_SUCCESS:
      return {
        ...state,
        teamName: action.payload,
      };
    case FETCH_USER_TEAM_NAME_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_TEAM_NAME_START:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_TEAM_NAME_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_TEAM_NAME_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // case UPDATE_TEAM_POINTS:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     teams: [
    //       ...state.teams,
    //     //   TODO: Update the team points

    //       state.teams.map((team) => {
    //         if (team.id === action.payload.id) {
    //           team.points = action.payload.points;
    //         }
    //       }),
    //     ],
    //   };

    default:
      return state;
  }
}

export default reducer;
