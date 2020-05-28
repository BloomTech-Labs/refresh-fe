import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { connect } from "react-redux";
import { fetchTeams, editTeamName, fetchAllUsers } from "../actions/actions";
import TeamCard from "./teamCard";
import AddTeamButton from "./addTeam";
import UserAvatar from "../user-list/useravatar.svg";


const Leaderboard = (props) => {
  const [render, setRender] = useState(false);

  //state for accordion function
  const [teamIndex, setTeamIndex] = useState(null);

  useEffect(() => {
    props.fetchTeams();
    props.fetchAllUsers();
  }, [render]);

  const makeRender = (change) => {
    console.log("makeRender", change);
    setRender(change);
  };

  //accordion function - the index opens onClick, and closes onClick
  const clickIndex = (num) => {
    if (teamIndex === num) {
      setTeamIndex(null);
    } else {
      setTeamIndex(num);
    }
  };

  return (
    <div className="leader-board-section">

        <div className='leaderboard-title'>
          <h1>Leaderboard</h1>
        <AddTeamButton makeRender={makeRender} render={render}></AddTeamButton>
      </div>



      <div className='team-card-labels'>
        <p className='team-card-labels-teams'>Teams</p>
        <p className='team-card-labels-points'>Points</p>
        <p className='team-card-labels-edit'>Edit</p>
        {/* <div className='team-card-labels-empty-div'></div> */}
      </div>

      {props.teams
        .sort((a, b) => {
          return b.points - a.points;
        })
        .map((team, index) => {
          return (
            <div key={team.id}>
              <Button
                color="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  clickIndex(index);
                }}
                style={{ marginBottom: "1rem" }}
              >
                <div className="teamCardFlex">
                  <TeamCard
                    team={team}
                    makeRender={makeRender}
                    render={render}
                  />
                </div>
              </Button>

              {/* accordion closes index when a new index is clicked on */}
              <Collapse isOpen={index === teamIndex}>
                <Card>
                  <CardBody>
                    {props.allUsers
                      .sort((a, b) => {
                        return b.total_points - a.total_points;
                      })
                      .map((user) => {
                        if (user.team_id === team.id) {
                          return (
                            <div className="accordian-user-card">
                              <p className="team-card-team-name">
                                {user.full_name}
                              </p>
                              <p className="team-card-points">
                                {user.total_points}
                              </p>
                              <div className="user-avatar">
                              {(user.avatar ? <img style={{'borderRadius':'50%'}}src={`https://lab23-refresh-be.herokuapp.com/${user.avatar}`}></img> : <img src={UserAvatar}></img>)}
                              </div>
                            </div>
                          );
                        }
                      })}
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          );
        })}
    </div>
  );
};

export default connect(
  (state) => {
    return {
      teams: state.reducer.teams,
      allUsers: state.reducer.allUsers,
      singleUser: state.reducer.singleUser,
      isFetching: state.reducer.isFetching,
      error: state.reducer.error,
    };
  },
  { fetchTeams, editTeamName, fetchAllUsers }
)(Leaderboard);
