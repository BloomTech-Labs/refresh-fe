import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
import history from "../../../helpers/history";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_END = "FETCHING_END";
export const SET_ERROR = "SET_ERROR";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE_WATER = "UPDATE_WATER";
export const UPDATE_SLEEP = "UPDATE_SLEEP";
export const UPDATE_EXERCISE = "UPDATE_EXERCISE";
export const UPDATE_BREAKS = "UPDATE_BREAKS";
export const UPDATE_POINTS = "UPDATE_POINTS";

export const UPDATE_TEAM_POINTS = "UPDATE_TEAM_POINTS";
export const UPDATE_USER_TEAM_FAILURE = "UPDATE_USER_TEAM_FAILURE";

//login
export const login = (user) => (dispatch) => {
  dispatch({ type: FETCHING_START });
  axiosWithAuth()
    .post("/users/login", user)
    .then((response) => {
      console.log("LOGIN USER DATA: ", response);

      //set up to grab teamName from team_id that is given after login, so we can set team name to state to show on dashboard
      let userInfo = response.data.UserInfo;
      let teamName = "";

      if (response.data.UserInfo.team_id !== null) {
        axios
          .get(`http://localhost:5003/teams/${response.data.UserInfo.team_id}`)
          .then((response) => {
            console.log("RESPONSE FROM GET TEAM", response);
            teamName = response.data.name;

            dispatch({
              type: LOGIN,
              payload: { user: userInfo, teamName: teamName },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        teamName = "Team not assigned";

        dispatch({
          type: LOGIN,
          payload: { user: userInfo, teamName: teamName },
        });
      }

      //set token to local storage
      window.localStorage.setItem("token", response.data.token);

      history.push("/UserDashboard");
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      dispatch({ type: SET_ERROR, payload: error });
    });
};

//register
export const register = (user) => (dispatch) => {
  dispatch({ type: FETCHING_START });
  axios
    .post("http://localhost:5003/users/register", user)
    .then((response) => {
      //set up to grab teamName from team_id that is given after login, so we can set team name to state to show on dashboard
      let teamName = "";

      if (response.data.UserInfo.team_id !== null) {
        axios
          .get(`http://localhost:5003/teams/${response.data.UserInfo.team_id}`)
          .then((response) => {
            console.log("RESPONSE FROM GET TEAM", response);
            teamName = response.team_name;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        teamName = "Team not assigned";
      }

      dispatch({
        type: LOGIN,
        payload: { user: response.data.UserInfo, teamName: teamName },
      });

      //set token to local storage
      window.localStorage.setItem("token", response.data.token);

      history.push("/UserDashboard");
    })
    .catch((error) => {
      console.log("ERROR FROM REGISTER", error);
      dispatch({ type: SET_ERROR, payload: error });
    });
};

//logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  window.localStorage.clear();
  //history.push('/');
};

//update water metrics, addition
export const addWater = (increaseNum, userId, dailyPoints, totalPoints) => (
  dispatch
) => {
  dispatch({ type: FETCHING_START });
  //first GET the water metric, in order to know what the current water number is to increase it by
  axiosWithAuth()
    // Goes to the server to get the entire User's information
    .get(`http://localhost:5003/users/${userId}/metrics`)
    .then((response) => {
      //call helper function to find out how many points to update by
      const pointsToUpdate = updatePointsWater(response.data.water, 8, "add");

      //make the PUT request to update water metric on the back end, then dispatch the action to update state on the front end
      axiosWithAuth()
        .put(`http://localhost:5003/users/${userId}/metrics`, {
          water: response.data.water + increaseNum,
          daily_points: dailyPoints + pointsToUpdate,
          total_points: totalPoints + pointsToUpdate,
        })
        .then((response) => {
          dispatch({ type: UPDATE_WATER, payload: increaseNum });

          dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate });
        })
        .catch((error) => {
          dispatch({ type: SET_ERROR, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });

  // make a PUT request to update the teams total points

  // TODO: Find the user's team ID

  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}`)
    .then((response) => {
      const teamId = response.data.team_id;
      // TODO: Find the team table to see what it currently has
      axiosWithAuth()
        .get(`http://localhost:5003/teams/${teamId}`)
        .then((response) => {
          axiosWithAuth()
            // TODO: Update team points
            .put(`http://localhost:5003/teams/${teamId}`, {
              // TODO: find the previous team points + add water update
              points: response.data.points + 1,
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
        })
        .catch((error) => {
          dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
    });
};

//update water metrics, subtraction
export const subtractWater = (
  decreaseNum,
  userId,
  dailyPoints,
  totalPoints
) => (dispatch) => {
  console.log("hit subtractWater");
  dispatch({ type: FETCHING_START });

  //first GET the water metric, in order to know what the current water number is to decrease it by
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}/metrics`)
    .then((response) => {
      //check to make sure water metric isn't currently at 0, to avoid negative metric input
      if (response.data.water != 0) {
        //call helper function to find out how many points to update by
        const pointsToUpdate = updatePointsWater(
          response.data.water,
          8,
          "subtract"
        );

        //make the PUT request to update water metric on the back end, then dispatch the action to update state on the front end
        axiosWithAuth()
          .put(`http://localhost:5003/users/${userId}/metrics`, {
            water: response.data.water + decreaseNum,
            daily_points: dailyPoints + pointsToUpdate,
            total_points: totalPoints + pointsToUpdate,
          })
          .then((response) => {
            dispatch({ type: UPDATE_WATER, payload: decreaseNum });

            dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate });
          })
          .catch((error) => {
            dispatch({ type: SET_ERROR, payload: error });
          });
      } else {
        dispatch({ type: FETCHING_END });
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });

  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}`)
    .then((response) => {
      const teamId = response.data.team_id;
      // TODO: Find the team table to see what it currently has
      axiosWithAuth()
        .get(`http://localhost:5003/teams/${teamId}`)
        .then((response) => {
          axiosWithAuth()
            // TODO: Update team points
            .put(`http://localhost:5003/teams/${teamId}`, {
              // TODO: find the previous team points then water update
              points: response.data.points - 1,
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
        })
        .catch((error) => {
          dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
    });
};

//update sleep metrics, addition
export const addSleep = (increaseNum, userId, dailyPoints, totalPoints) => (
  dispatch
) => {
  dispatch({ type: FETCHING_START });

  //first GET the sleep metric, in order to know what the current sleep number is to increase it by
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}/metrics`)
    .then((response) => {
      //call helper function to find out how many points to update by
      const pointsToUpdate = updatePointsSleep(response.data.sleep, 8, "add");

      console.log("response.data.daily_points: ", dailyPoints);
      console.log("pointsToUpdate: ", pointsToUpdate);

      //make the PUT request to update sleep metric on the back end, then dispatch the action to update state on the front end
      axiosWithAuth()
        .put(`http://localhost:5003/users/${userId}/metrics`, {
          sleep: response.data.sleep + increaseNum,
          daily_points: dailyPoints + pointsToUpdate,
          total_points: totalPoints + pointsToUpdate,
        })
        .then((response) => {
          dispatch({ type: UPDATE_SLEEP, payload: increaseNum });

          dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate });
        })
        .catch((error) => {
          dispatch({ type: SET_ERROR, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });

  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}`)
    .then((response) => {
      const teamId = response.data.team_id;
      // TODO: Find the team table to see what it currently has
      axiosWithAuth()
        .get(`http://localhost:5003/teams/${teamId}`)
        .then((response) => {
          axiosWithAuth()
            // TODO: Update team points
            .put(`http://localhost:5003/teams/${teamId}`, {
              // TODO: find the previous team points + update points
              points: response.data.points + 1,
            })
            .then((response) => {
                dispatch({ type: UPDATE_TEAM_POINTS, payload: response.data.result});
            })
            .catch((error) => {
                dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
              });
        })
        .catch((error) => {
            dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
          });

})
.catch((error) => {
    dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
  });
};

//update sleep metrics, subtraction
export const subtractSleep = (
  decreaseNum,
  userId,
  dailyPoints,
  totalPoints
) => (dispatch) => {
  dispatch({ type: FETCHING_START });

  //first GET the sleep metric, in order to know what the current sleep number is to decrease it by
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}/metrics`)
    .then((response) => {
      //check to make sure sleep metric isn't currently at 0, to avoid negative metric input
      if (response.data.sleep != 0) {
        //call helper function to find out how many points to update by
        const pointsToUpdate = updatePointsSleep(
          response.data.sleep,
          8,
          "subtract"
        );

        //make the PUT request to update sleep metric on the back end, then dispatch the action to update state on the front end
        axiosWithAuth()
          .put(`http://localhost:5003/users/${userId}/metrics`, {
            sleep: response.data.sleep + decreaseNum,
            daily_points: dailyPoints + pointsToUpdate,
            total_points: totalPoints + pointsToUpdate,
          })
          .then((response) => {
            dispatch({ type: UPDATE_SLEEP, payload: decreaseNum });

            dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate });
          })
          .catch((error) => {
            dispatch({ type: SET_ERROR, payload: error });
          });
      } else {
        dispatch({ type: FETCHING_END });
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}`)
    .then((response) => {
      const teamId = response.data.team_id;
      // TODO: Find the team table to see what it currently has
      axiosWithAuth()
        .get(`http://localhost:5003/teams/${teamId}`)
        .then((response) => {
          axiosWithAuth()
            // TODO: Update team points
            .put(`http://localhost:5003/teams/${teamId}`, {
              // TODO: find the previous team points + update points
              points: response.data.points - 1,
            })
            .then((response) => {
                dispatch({ type: UPDATE_TEAM_POINTS, payload: response.data.result});
            })
            .catch((error) => {
                dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
              });
        })
        .catch((error) => {
            dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
          });

})
.catch((error) => {
    dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
  });
};

//update exercise metrics, addition
export const addExercise = (increaseNum, userId, dailyPoints, totalPoints) => (
  dispatch
) => {
  dispatch({ type: FETCHING_START });

  //first GET the exercise metric, in order to know what the current exercise number is to increase it by
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}/metrics`)
    .then((response) => {
      //call helper function to find out how many points to update by
      const pointsToUpdate = updatePointsExercise(
        response.data.exercise,
        4,
        "add",
        increaseNum
      );

      //make the PUT request to update exercise metric on the back end, then dispatch the action to update state on the front end
      axiosWithAuth()
        .put(`http://localhost:5003/users/${userId}/metrics`, {
          exercise: response.data.exercise + increaseNum,
          daily_points: dailyPoints + pointsToUpdate,
          total_points: totalPoints + pointsToUpdate,
        })
        .then((response) => {
          dispatch({ type: UPDATE_EXERCISE, payload: increaseNum });

          dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate });
        })
        .catch((error) => {
          dispatch({ type: SET_ERROR, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });

  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}`)
    .then((response) => {
      const teamId = response.data.team_id;
      // TODO: Find the team table to see what it currently has
      axiosWithAuth()
        .get(`http://localhost:5003/teams/${teamId}`)
        .then((response) => {
          axiosWithAuth()
            // TODO: Update team points
            .put(`http://localhost:5003/teams/${teamId}`, {
              // TODO: find the previous team points + update points
              points: response.data.points + 2,
            })
            .then((response) => {
                dispatch({ type: UPDATE_TEAM_POINTS, payload: response.data.result});
            })
            .catch((error) => {
                dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
              });
        })
        .catch((error) => {
            dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
          });

})
.catch((error) => {
    dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
  });
};

//update exercise metrics, subtraction
export const subtractExercise = (
  decreaseNum,
  userId,
  dailyPoints,
  totalPoints
) => (dispatch) => {
  dispatch({ type: FETCHING_START });

  //first GET the exercise metric, in order to know what the current exercise number is to decrease it by
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}/metrics`)
    .then((response) => {
      //check to make sure exercise metric isn't currently at 0, to avoid negative metric input
      if (response.data.exercise != 0) {
        //call helper function to find out how many points to update by
        const pointsToUpdate = updatePointsExercise(
          response.data.exercise,
          4,
          "subtract",
          decreaseNum
        );

        //make the PUT request to update exercise metric on the back end, then dispatch the action to update state on the front end
        axiosWithAuth()
          .put(`http://localhost:5003/users/${userId}/metrics`, {
            exercise: response.data.exercise + decreaseNum,
            daily_points: dailyPoints + pointsToUpdate,
            total_points: totalPoints + pointsToUpdate,
          })
          .then((response) => {
            dispatch({ type: UPDATE_EXERCISE, payload: decreaseNum });

            dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate });
          })
          .catch((error) => {
            dispatch({ type: SET_ERROR, payload: error });
          });
      } else {
        dispatch({ type: FETCHING_END });
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });

  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}`)
    .then((response) => {
      const teamId = response.data.team_id;
      // TODO: Find the team table to see what it currently has
      axiosWithAuth()
        .get(`http://localhost:5003/teams/${teamId}`)
        .then((response) => {
          axiosWithAuth()
            // TODO: Update team points
            .put(`http://localhost:5003/teams/${teamId}`, {
              // TODO: find the previous team points + update points
              points: response.data.points - 2,
            })
            .then((response) => {
                dispatch({ type: UPDATE_TEAM_POINTS, payload: response.data.result});
            })
            .catch((error) => {
                dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
              });
        })
        .catch((error) => {
            dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
          });

})
.catch((error) => {
    dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
  });
};

//update breaks metrics, addition
export const addBreaks = (increaseNum, userId, dailyPoints, totalPoints) => (
  dispatch
) => {
  dispatch({ type: FETCHING_START });

  //first GET the breaks metric, in order to know what the current breaks number is to increase it by
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}/metrics`)
    .then((response) => {
      //call helper function to find out how many points to update by
      const pointsToUpdate = updatePointsBreaks(
        response.data.breaks,
        2,
        "add",
        increaseNum
      );

      //make the PUT request to update breaks metric on the back end, then dispatch the action to update state on the front end
      axiosWithAuth()
        .put(`http://localhost:5003/users/${userId}/metrics`, {
          breaks: response.data.breaks + increaseNum,
          daily_points: dailyPoints + pointsToUpdate,
          total_points: totalPoints + pointsToUpdate,
        })
        .then((response) => {
          dispatch({ type: UPDATE_BREAKS, payload: increaseNum });

          dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate });
        })
        .catch((error) => {
          dispatch({ type: SET_ERROR, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });

  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}`)
    .then((response) => {
      const teamId = response.data.team_id;
      // TODO: Find the team table to see what it currently has
      axiosWithAuth()
        .get(`http://localhost:5003/teams/${teamId}`)
        .then((response) => {
          axiosWithAuth()
            // TODO: Update team points
            .put(`http://localhost:5003/teams/${teamId}`, {
              // TODO: find the previous team points + update points
              points: response.data.points + 4,
            })
            .then((response) => {
                dispatch({ type: UPDATE_TEAM_POINTS, payload: response.data.result});
            })
            .catch((error) => {
                dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
              });
        })
        .catch((error) => {
            dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
          });

})
.catch((error) => {
    dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
  });
};

//update breaks metrics, subtraction
export const subtractBreaks = (
  decreaseNum,
  userId,
  dailyPoints,
  totalPoints
) => (dispatch) => {
  dispatch({ type: FETCHING_START });

  //first GET the breaks metric, in order to know what the current breaks number is to decrease it by
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}/metrics`)
    .then((response) => {
      //check to make sure breaks metric isn't currently at 0, to avoid negative metric input
      if (response.data.breaks != 0) {
        //call helper function to find out how many points to update by
        const pointsToUpdate = updatePointsBreaks(
          response.data.breaks,
          2,
          "subtract",
          decreaseNum
        );

        //make the PUT request to update breaks metric on the back end, then dispatch the action to update state on the front end
        axiosWithAuth()
          .put(`http://localhost:5003/users/${userId}/metrics`, {
            breaks: response.data.breaks + decreaseNum,
            daily_points: dailyPoints + pointsToUpdate,
            total_points: totalPoints + pointsToUpdate,
          })
          .then((response) => {
            dispatch({ type: UPDATE_BREAKS, payload: decreaseNum });

            dispatch({ type: UPDATE_POINTS, payload: pointsToUpdate });
          })
          .catch((error) => {
            dispatch({ type: SET_ERROR, payload: error });
          });
      } else {
        dispatch({ type: FETCHING_END });
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
    });
  axiosWithAuth()
    .get(`http://localhost:5003/users/${userId}`)
    .then((response) => {
      const teamId = response.data.team_id;
      // TODO: Find the team table to see what it currently has
      axiosWithAuth()
        .get(`http://localhost:5003/teams/${teamId}`)
        .then((response) => {
          axiosWithAuth()
            // TODO: Update team points
            .put(`http://localhost:5003/teams/${teamId}`, {
              // TODO: find the previous team points + update points
              points: response.data.points - 4,
            })
            .then((response) => {
                dispatch({ type: UPDATE_TEAM_POINTS, payload: response.data.result});
            })
            .catch((error) => {
                dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
              });
        })
        .catch((error) => {
            dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
          });

})
.catch((error) => {
    dispatch({ type: UPDATE_USER_TEAM_FAILURE, payload: error });
  });
};

//update points for sleep helper function
function updatePointsSleep(metricNum, goal, operation) {
  let pointsToAdd = 0;

  //update points only if at or below goal
  if (metricNum <= goal) {
    //check to see what operation is requested, and update points accordingly
    if (operation === "add") {
      if (metricNum >= 0 && metricNum < 8) {
        pointsToAdd = 1;
      }
    } else if (operation === "subtract") {
      if (metricNum > 0 && metricNum <= 8) {
        pointsToAdd = -1;
      }
    }
  }

  return pointsToAdd;
}

//update points for exercise helper function
function updatePointsExercise(metricNum, goal, operation, changeInMetric) {
  let pointsToAdd = 0;
  let currentMetricNum = metricNum / Math.abs(changeInMetric); //(divide metricNum by changeInMetric, since exercise is currently measured in intervals of 15)

  //update points only if at or below goal
  if (currentMetricNum / Math.abs(changeInMetric) <= goal) {
    //check to see what operation is requested, and update points accordingly
    if (operation === "add") {
      if (currentMetricNum >= 0 && currentMetricNum < 4) {
        pointsToAdd = 2;
      }
    } else if (operation === "subtract") {
      if (currentMetricNum > 0 && currentMetricNum <= 4) {
        pointsToAdd = -2;
      }
    }
  }

  return pointsToAdd;
}

//update points for sleep helper function
function updatePointsBreaks(metricNum, goal, operation) {
  let pointsToAdd = 0;

  //update points only if at or below goal
  if (metricNum <= goal) {
    //check to see what operation is requested, and update points accordingly
    if (operation === "add") {
      if (metricNum >= 0 && metricNum < 2) {
        pointsToAdd = 4;
      }
    } else if (operation === "subtract") {
      if (metricNum > 0 && metricNum <= 2) {
        pointsToAdd = -4;
      }
    }
  }

  return pointsToAdd;
}

//update points for water helper function
function updatePointsWater(metricNum, goal, operation) {
  let pointsToAdd = 0;

  //update points only if at or below goal
  if (metricNum <= goal) {
    //check to see what operation is requested, and update points accordingly
    if (operation === "add") {
      if (metricNum >= 0 && metricNum < 8) {
        pointsToAdd = 1;
      }
    } else if (operation === "subtract") {
      if (metricNum > 0 && metricNum <= 8) {
        pointsToAdd = -1;
      }
    }
  }

  return pointsToAdd;
}
