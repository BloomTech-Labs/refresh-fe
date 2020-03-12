import React, { Component } from 'react';
import styled from "styled-components";
import { axiosWithAuth } from './axiosWithAuth'
import DeleteButton from './deleteButton'
import TeamDetails from './teamDetails'
import UpdateForm from './updateForm'
import UserList from './userList'

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

const TeamCard = props => {

    this.state = {
      Users: [],
      showTeamDetails: false
    };
  

  // toggleTeamDetails() {
  //   this.setState({
  //     showTeamDetails: !this.state.showTeamDetails
  //   });
  // }

  function getTeams() {
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
            <UserList />
            {/* <UpdateForm /> */}
            {/* <DeleteButton /> */}
          </TeamDiv>)

        this.setState({ team })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function componentDidMount() {
    this.getTeams()
  }

 
    return (
      <Container>
        <span>
          <TeamName>
            {this.state.team}

          </TeamName>
        </span>
      </Container>
    );
  }


export default TeamCard;