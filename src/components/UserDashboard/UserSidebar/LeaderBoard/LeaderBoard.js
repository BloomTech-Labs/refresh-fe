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
        <div className="sidebar-title">
          <h2>Leaderboard</h2>
        </div>

        <div className="sidebar-content-leaderboard">
          {sortedTeams.map((team) => {
            return (
              <div className="sidebar-content-categrories" key={team.id}>
                <h3>{team.name}</h3>
                <h4>{team.points}</h4>
              </div>
            );
          })}
        </div>
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
