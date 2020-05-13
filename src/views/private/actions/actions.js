import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
import history from "../../../helpers/history";

// Action Types
export const FETCH_ALL_USERS_LOADING = "FETCH_ALL_USERS_LOADING";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_USERS_FAILURE = "FETCH_ALL_USERS_FAILURE";

export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const FETCH_USER_TEAM_NAME_LOADING = "FETCH_USER_TEAM_NAME_LOADING";
export const FETCH_USER_TEAM_NAME_SUCCESS = "FETCH_USER_TEAM_NAME_SUCCESS";
export const FETCH_USER_TEAM_NAME_FAILURE = "FETCH_USER_TEAM_NAME_FAILURE";

export const FETCH_TEAMS_LOADING = "FETCH_TEAMS_LOADING";
export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
export const FETCH_TEAMS_FAILURE = "FETCH_TEAMS_FAILURE";

export const UPDATE_USER_TEAM_START = "UPDATE_USER_TEAM_START";
export const UPDATE_USER_TEAM_SUCCESS = "UPDATE_USER_TEAM_SUCCESS";
export const UPDATE_USER_TEAM_FAILURE = "UPDATE_USER_TEAM_FAILURE";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const CREATE_NEW_TEAM_START = "CREATE_NEW_TEAM_START";
export const CREATE_NEW_TEAM_SUCCESS = "CREATE_NEW_TEAM_SUCCESS";
export const CREATE_NEW_TEAM_FAILURE = "CREATE_NEW_TEAM_FAILURE";

export const DELETE_TEAM_START = "DELETE_TEAM_START";
export const DELETE_TEAM_SUCCESS = "DELETE_TEAM_SUCCESS";
export const DELETE_TEAM_FAILURE = "DELETE_TEAM_FAILURE";

export const UPDATE_TEAM_NAME_START = "UPDATE_TEAM_NAME_START";
export const UPDATE_TEAM_NAME_SUCCESS = "UPDATE_TEAM_NAME_SUCCESS";
export const UPDATE_TEAM_NAME_FAILURE = "UPDATE_TEAM_NAME_FAILURE";
export const UPDATE_TEAM_POINTS = "UPDATE_TEAM_POINTS";

// Async Action Creators
export const fetchAllUsers = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_USERS_LOADING });
  axios
    .get(`https://lab23-refresh-be.herokuapp.com/users/`)
    .then((response) =>
      dispatch({ type: FETCH_ALL_USERS_SUCCESS, payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: FETCH_ALL_USERS_FAILURE, payload: error })
    );
};

export const fetchUserTeamName = (userId) => (dispatch) => {
  console.log("fetch");
  dispatch({ type: FETCH_USER_TEAM_NAME_LOADING });
  axios
    .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}/team`)
    .then((response) =>
      dispatch({ type: FETCH_USER_TEAM_NAME_SUCCESS, payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: FETCH_USER_TEAM_NAME_FAILURE, payload: error })
    );
};

export const updateUserTeam = (userId, editedTeamId) => (dispatch) => {
  dispatch({ type: UPDATE_USER_TEAM_START });
  axios
    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}`, editedTeamId)
    .then((response) => {
      console.log("updateUserTeam response: ", response);
      dispatch({ type: UPDATE_USER_TEAM_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error })
    );
};

export const deleteUser = (userId) => (dispatch) => {
  dispatch({ type: DELETE_USER_START });
  axios
    .delete(`https://lab23-refresh-be.herokuapp.com/users/${userId}`)
    .then((response) => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: response });
    })
    .catch((error) => dispatch({ type: DELETE_USER_FAILURE, payload: error }));
};

export const fetchUser = (userId) => (dispatch) => {
  dispatch({ type: FETCH_USER_LOADING });
  axios
    .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}`)
    .then((response) => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: FETCH_USER_FAILURE, payload: error }));
};

export const createNewTeam = (Team) => (dispatch) => {
  dispatch({ type: CREATE_NEW_TEAM_START });
  axios
    .post(`https://lab23-refresh-be.herokuapp.com/teams/`, Team)
    .then((response) => {
      console.log("createNewTeam response: ", response);
      dispatch({ type: CREATE_NEW_TEAM_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: CREATE_NEW_TEAM_FAILURE, payload: error })
    );
};

export const fetchTeams = () => (dispatch) => {
  dispatch({ type: FETCH_TEAMS_LOADING });
  axios
    .get(`https://lab23-refresh-be.herokuapp.com/teams`)
    .then((response) => {
      dispatch({ type: FETCH_TEAMS_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: FETCH_TEAMS_FAILURE, payload: error }));
};

export const deleteTeam = (teamId) => (dispatch) => {
  dispatch({ type: DELETE_USER_START });
  axios
    .delete(`https://lab23-refresh-be.herokuapp.com/teams/${teamId}`)
    .then((response) => {
      console.log("deleteTeam response: ", response);
      dispatch({ type: DELETE_TEAM_SUCCESS, payload: response });
    })
    .catch((error) => dispatch({ type: DELETE_TEAM_FAILURE, payload: error }));
};

export const editTeamName = (teamId, editedTeamName) => (dispatch) => {
  dispatch({ type: UPDATE_TEAM_NAME_START });
  axios
    .put(
      `https://lab23-refresh-be.herokuapp.com/teams/${teamId}`,
      editedTeamName
    )
    .then((response) => {
      console.log("editTeamName response: ", response);
      dispatch({ type: UPDATE_TEAM_NAME_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: UPDATE_TEAM_NAME_FAILURE, payload: error })
    );
};



export const updateTeamPoints = () => (dispatch) => {
  //find all teams
  dispatch({ type: FETCH_TEAMS_LOADING });
  axios
    .get(`https://lab23-refresh-be.herokuapp.com/teams`)
    .then((teamResponse) => {
      //find all users
      axios
        .get(`https://lab23-refresh-be.herokuapp.com/users/`)
        .then((userResponse) => {
          dispatch({
            type: FETCH_ALL_USERS_SUCCESS,
            payload: userResponse.data,
          });

          teamResponse.data.map((team) => {
            //resets each team points to 0
            let teamTotalPoints = 0;

            userResponse.data.map((user) => {
              //finds all users per team_id
              if (user.team_id === team.id) {
                console.log("USER MATCHES TEAM:", user, team);
                //finds sum of user's total_points per team then adds to team.points
                teamTotalPoints += user.total_points;
              }
            });

            // Send teamTotalPoints to server
            axiosWithAuth()
              .put(`https://lab23-refresh-be.herokuapp.com/teams/${team.id}`, {
                points: teamTotalPoints,
              })
              .then((response) => {
                dispatch({
                  type: UPDATE_TEAM_POINTS,
                  payload: response.data.result,
                });
              })
              .catch((error) => {
                dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
              });
          });
        })
        .catch((error) =>
          dispatch({ type: FETCH_ALL_USERS_FAILURE, payload: error })
        );
    })
    .catch((error) => dispatch({ type: FETCH_TEAMS_FAILURE, payload: error }));

 
};

export const adminLogin = (credentials) => (dispatch) => {
  dispatch({ type: FETCH_USER_LOADING });
  axiosWithAuth()
    .post("/admin/login", credentials)
    .then((res) => {
      console.log(res.data.token);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("admin", true);
        history.push("/leaderboard");
      } else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_USER_FAILURE, payload: err });
    });
};
