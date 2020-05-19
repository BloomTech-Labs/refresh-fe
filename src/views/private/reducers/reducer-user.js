import {
  FETCHING_START,
  FETCHING_END,
  SET_ERROR,
  LOGIN,
  LOGOUT,
  UPDATE_WATER,
  UPDATE_SLEEP,
  UPDATE_EXERCISE,
  UPDATE_BREAKS,
  UPDATE_POINTS,
  CLEAR_ERROR,
} from "../actions/actions-user.js";

const initialState = {
  isFetching: false,
  error: null,
  fullName: "",
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
  teamName: "",
  pointsPerMetric: {
    water: { points: 1, max: 8 },
    sleep: { points: 1, max: 8 },
    exercise: { points: 2, max: 8 },
    breaks: { points: 4, max: 8 },
  },
};

function reducer(state = initialState, action) {
  console.log("action", action);

  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCHING_END:
      return {
        ...state,
        isFetching: false,
      };
    case SET_ERROR:
      delete action.payload.toJSON;
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
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
        teamName: action.payload.teamName,
      };
    case LOGOUT:
      return {
        isFetching: false,
        error: null,
        fullName: "",
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
        teamName: "",
        pointsPerMetric: {
          water: { points: 1, max: 8 },
          sleep: { points: 1, max: 8 },
          exercise: { points: 2, max: 8 },
          breaks: { points: 4, max: 8 },
        },
      };
    case UPDATE_WATER:
      return {
        ...state,
        isFetching: false,
        water: state.water + action.payload,
      };
    case UPDATE_SLEEP:
      return {
        ...state,
        isFetching: false,
        sleep: state.sleep + action.payload,
      };
    case UPDATE_EXERCISE:
      return {
        ...state,
        isFetching: false,
        exercise: state.exercise + action.payload,
      };
    case UPDATE_BREAKS:
      return {
        ...state,
        isFetching: false,
        breaks: state.breaks + action.payload,
      };
    case UPDATE_POINTS: {
      return {
        ...state,
        dailyPoints: state.dailyPoints + action.payload,
        totalPoints: state.totalPoints + action.payload,
      };
    }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}

export default reducer;
