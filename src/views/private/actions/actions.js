import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
import {axiosWithAuthMulti} from  "../../../views/private/admin-leaderboard/axiosWithAuthMulti"
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

export const CLEAR_ERROR = "CLEAR_ERROR";

export const UPLOAD_AVATAR_START = "UPLOAD_AVATAR_START";
export const UPLOAD_AVATAR_SUCCESS = "UPLOAD_AVATAR_SUCCESS";
export const UPLOAD_AVATAR_FAILURE= "UPLOAD_AVATAR_FAILURE";
export const FETCHING_START = "FETCHING_START";
export const SET_ERROR = "SET_ERROR";

//this specific action maps to reducer-user.js, not reducer.js
export const uploadAvatar =(userId, userAvatar)=>(dispatch)=>{
  dispatch({type: FETCHING_START});

  axiosWithAuthMulti()
  .put(`https://lab23-refresh-be.herokuapp.com/users/avatar/${userId}`,
  userAvatar)
 
  .then((response)=>{
    console.log('AVATAR:', response)
    dispatch({type: UPLOAD_AVATAR_SUCCESS, payload: response.data.count.avatar});
  })
  .catch((error)=>dispatch({type: SET_ERROR, payload: error}))
};
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

export const updateUserTeam = (userId, editedTeamId, oldTeamId, usersPoints) => (dispatch) => {
  dispatch({ type: UPDATE_USER_TEAM_START });
  axios
    .put(`https://lab23-refresh-be.herokuapp.com/users/${userId}`, editedTeamId)
    .then((response) => {
      dispatch({ type: UPDATE_USER_TEAM_SUCCESS, payload: response.data });

      //if update succeeds, then update old and new team's points on backend and front end

      //first GET existing total points of old team, in order to use when adjusting the team's total points due to user changing teams
      //check to make sure oldTeamId isn't null (as it would be if it were a fresh user not yet assigned to a team)
      if (oldTeamId !== null) {
        axios
          .get(`https://lab23-refresh-be.herokuapp.com/teams/${oldTeamId}`)
          .then(response => {
            const oldTeamTotalPoints = response.data.points

            //update old team's points
            axios
              .put(`https://lab23-refresh-be.herokuapp.com/teams/${oldTeamId}`, {points: (oldTeamTotalPoints - usersPoints)})
              .then((response) => {
                dispatch({ type: UPDATE_TEAM_POINTS, payload: {teamId: oldTeamId, points: (oldTeamTotalPoints - usersPoints)} });
              })
              .catch((error) => {
                console.log("Error when updating team's points", error)
              });
          })
      }

      //then update new team's points, backend and front end
      //first GET existing total points of new team, in order to use when adjusting the teams total points due to user changing teams
      axios
      .get(`https://lab23-refresh-be.herokuapp.com/teams/${editedTeamId.team_id}`)
      .then((response => {
        const newTeamTotalPoints = response.data.points

        //update new team's points
        axios
        .put(`https://lab23-refresh-be.herokuapp.com/teams/${editedTeamId.team_id}`, {points: (newTeamTotalPoints + usersPoints)})
        .then((response) => {
          dispatch({ type: UPDATE_TEAM_POINTS, payload: {teamId: parseInt(editedTeamId.team_id), points: (newTeamTotalPoints + usersPoints)} });
        })
        .catch((error) => {
          console.log("Error when updating new team's points", error)
        });
      }))

    })
    .catch((error) =>
      dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error })
    );
};

export const deleteUser = (userId) => (dispatch) => {
  dispatch({ type: DELETE_USER_START });

  //first GET information about employee that is going to be deleted
  //this is needed in order to update teams points if that user was on a team
  let teamId = 0;
  let usersPoints = 0;

  axios
    .get(`https://lab23-refresh-be.herokuapp.com/users/${userId}`)
    .then((response) => {
      teamId = response.data.team_id;
      usersPoints = response.data.total_points;
    })
    .catch((error) => {
      console.log("error when fetching user to delete")
    })


  //delete user from the database
  axios
    .delete(`https://lab23-refresh-be.herokuapp.com/users/${userId}`)
    .then((response) => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: response });

      //then update that user's teams points, backend and front end (IF user was assigned to a team)
      //first GET existing total points of team, in order to use when adjusting the teams total points due to deletion of user
      if (teamId !== null) {
        axios
        .get(`https://lab23-refresh-be.herokuapp.com/teams/${teamId}`)
        .then((response => {
          const teamTotalPoints = response.data.points

          //update team's points
          axios
          .put(`https://lab23-refresh-be.herokuapp.com/teams/${teamId}`, {points: (teamTotalPoints - usersPoints)})
          .then((response) => {
            dispatch({ type: UPDATE_TEAM_POINTS, payload: {id: parseInt(teamId), points: (teamTotalPoints - usersPoints)} });
          })
          .catch((error) => {
            console.log("Error when updating team's points", error)
          });
        }))
      }

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
    .put(`https://lab23-refresh-be.herokuapp.com/teams/${teamId}`, editedTeamName)
    .then((response) => {
      console.log("editTeamName response: ", response);
      dispatch({ type: UPDATE_TEAM_NAME_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: UPDATE_TEAM_NAME_FAILURE, payload: error })
    );
};

export const adminLogin = (credentials) => (dispatch) => {
  dispatch({ type: FETCH_USER_LOADING });
  axiosWithAuth()
    .post("/admin/login", credentials)
    .then(res => {
      console.log(res.data.token);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("admin", true);
        history.push("/leaderboard");
      } else {
        console.log(res)
      }
    })
  .catch(err => {
    console.log(err)
    dispatch({type: FETCH_USER_FAILURE, payload: err})
  });
}

export const clearErrorAdmin = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
}