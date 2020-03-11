import React, { Component } from 'react';
import styled from "styled-components";
import { axiosWithAuth } from './axiosWithAuth'
import deleteButton from './deleteButton'
import TeamDetails from './teamDetails'
import updateForm from './updateForm'
import userList from './userList'

// background-color: #F7F7F7;
const Container = styled.div`
display: flex;
justify-content: center;
width: 90%;
height: 38vw;
box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 3px;
background-color: ${props => props.color};
padding: 1rem;
color: #fff;

  span {
    width: 100%;
  }
`;
const TeamDiv = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justifyContent: space-between;
`;

const TeamName = styled.div`
  width: 100%;
`;





export default class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      showTeamDetails: false
    };
  }

  toggleTeamDetails() {
    this.setState({
      showTeamDetails: !this.state.showTeamDetails
    });
  }

  getTeams() {
    axiosWithAuth()
      .get(`/teams`, {})
      .then(res => {
        const data = res.data
        console.log(data)
        const team = data.map(t =>
          <TeamDiv>
            <p>{t.name}</p>
            <p>{t.points}</p>
            {/* <button onClick={this.toggleTeamDetails.bind(this)}>Team Details</button> */}
            {/* {this.state.showTeamDetails ?
              <TeamDetails
                text='Click "Close Button" to hide Team Details'
                closeTeamDetails={this.toggleTeamDetails.bind(this)}/>
              : null
            } */}

          </TeamDiv>)

        this.setState({ team })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getTeams()
  }

  render() {
    return (
      <Container>
        <span>
          <TeamName>
            {this.state.team}
            <userList />
            <updateForm />
            <deleteButton />
          </TeamName>
        </span>
      </Container>
    );
  }
}