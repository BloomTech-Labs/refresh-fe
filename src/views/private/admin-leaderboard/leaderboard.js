import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { connect } from "react-redux";
import { fetchTeams, editTeamName } from "../actions/actions";
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
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    props.fetchTeams();
  }, [render]);

  const makeRender = (change) => {
    console.log("makeRender", change);
    setRender(change);
  };

  return (
    <Container>
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
        .map((team) => {
          return (
            <div>
              <Button
                color="primary"
                onClick={toggle}
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
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    {console.log("cardbody", props)};
                    {props.allUsers.map((user) => {
                      if (user.team_id === team.id) {
                        return (
                          <>
                            <p>{user.full_name}</p>
                            <p>{user.total_points}</p>
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
  { fetchTeams, editTeamName }
)(Leaderboard);
