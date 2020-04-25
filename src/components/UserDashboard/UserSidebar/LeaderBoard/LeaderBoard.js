import React from "react";
import { fetchTeams } from "../../../../../src/views/private/actions/actions";
import { connect } from "react-redux";

class LeaderBoard extends React.Component {
  componentDidMount() {
    this.props.fetchTeams();
  }

  render() {
    const sortedTeams = this.props.reducer.teams.sort((a, b) => {
      return b.points - a.points;
    });

    return (
      <div className="leader-board">
        <h1 style={{ fontSize: "25px" }}>Leaderboard</h1>
        <ul>
          {sortedTeams.map((team) => {
            return (
              <li>
                <strong> {team.name}</strong> {team.points}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      ...state,
  };
};

export default connect(mapStateToProps, { fetchTeams })(LeaderBoard);
