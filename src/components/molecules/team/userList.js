import React, { Component } from 'react';
import styled from "styled-components";
import updateTeam from './updateTeam'
import { axiosWithAuth } from './axiosWithAuth'

const UserCon = styled.div`
  width: 100%;
`;

const List = styled.div`
  width: 100%;
`;

const UserDiv = styled.div`
  width: 100%;

`;

export default class UserList extends Component {
  constructor(props) {
    super(props);
    console.log("props", props)
    this.state = {
      team: 2
    };
    
  }
  
  getUsers() {
    const self = this;
    axiosWithAuth()
      .get(`/users`, {})
      .then(res => {
        const data = res.data.filter(function (id) {
          // self.setState({ team: 2 })
          console.log("self.team", self.team)

          console.log("return", id.team_id === 1);
          return id.team_id === 1;
        })
        // console.log(data)
        const user = data.map(u =>
          <UserDiv>
            <p>{u.first_name}</p>
            <p>{u.last_name}</p>
            <p>{u.points}</p>
          </UserDiv>
        )
        // this.setState({ team_id: 1 })
        this.setState({ user })
        // console.log(this.state.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    return (
      <UserCon>
        <span>
          <List >
            {this.state.user}
          </List>
        </span>
      </UserCon>
    );
  }
}