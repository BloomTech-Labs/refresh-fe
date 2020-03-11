import React, { Component } from 'react';
import styled from "styled-components";
import updateTeam from './updateTeam'
import { axiosWithAuth } from './axiosWithAuth'

const UserCon = styled.div`
  width: 100%;
`;

const UserList = styled.div`
  width: 100%;
`;

const UserDiv = styled.div`
  width: 100%;

`;

export default class userList extends Component {
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
        .get(`/users`, {})
        .then(res => {
          const data = res.data
          console.log(data)
          const user = data.map(u =>
            <UserDiv>
              <p>{u.first_name}</p>
              <p>{u.last_name}</p>
              <p>{u.points}</p>
            </UserDiv>
            )

            
  
          this.setState({ user })
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
        <UserCon>
          <span>
            <UserList >
              {this.state.user}
            </UserList>
          </span>
        </UserCon>
      );
    }
  }