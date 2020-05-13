import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { connect } from "react-redux";
import {
  fetchTeams,
  editTeamName,
  fetchAllUsers,
  updateTeamPoints,
} from "../actions/actions";
import TeamCard from "./teamCard";
import AddTeamButton from "./addTeam";
import {
  Container,
  Title,
  BlueFlex,
  AddTeam,
} from "../styled-components/leaderboard-styles";

const Leaderboard = (props) => {
  const [render, setRender] = useState(false);

  //state for accordion function
  const [teamIndex, setTeamIndex] = useState(null);

  useEffect(() => {
    props.fetchTeams();
    props.fetchAllUsers();
    props.updateTeamPoints();
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
    <Container className="leaderboard">
      <Title>Leaderboard</Title>
      <AddTeam>
        <AddTeamButton makeRender={makeRender} render={render}></AddTeamButton>
      </AddTeam>
      <BlueFlex>
        <h2>Teams</h2>
        <h2>Points</h2>
        <div className="blank"> </div>
      </BlueFlex>

      {props.teams
        .sort((a, b) => {
          return b.points - a.points;
        })
        .map((team, index) => {
          return (
            <div key={team.id}>
              <Button
                color="primary"
                onClick={() => {
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
                    {props.allUsers.map((user) => {
                      if (user.team_id === team.id) {
                        return (
                          <>
                            <p>
                              {user.full_name}
                              {user.total_points}
                            </p>
                          </>
                        );
                      }
                    })}
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          );
        })}
    </Container>
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
  { fetchTeams, editTeamName, fetchAllUsers, updateTeamPoints }
)(Leaderboard);
