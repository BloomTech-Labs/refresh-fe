import React, { Component } from 'react';
import styled from "styled-components";
import {axiosWithAuth} from './axiosWithAuth'



const Container = styled.div`
width: 40vw;
max-width: 18rem;
max-height: 18rem;
height: 38vw;
box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 3px;
margin: 1rem 0.5rem;
background-color: ${props => props.color};
padding: 1rem;
color: #fff;

@media screen and (max-width: 361px) {
    height: 50vw;
    width: 50vw;
}

@media screen and (min-width: 1200px) {
    max-height: 17rem;
    max-width: 17rem;
}
i {
    /* font-size: calc(100vw / 20); */
font-size: 1rem;
    margin: 2rem 0;
    @media screen and (min-width: 1000px) {
        font-size: calc(100vw / 27);
    }
}

p {
    font-size: 1.6rem;
    letter-spacing: 0.025rem;
    align-self: flex-start;
}

span {
    font-weight: bold;
    align-self: flex-start;
    margin-top: auto;
}`
  ;

const TeamName = styled.div`
  width: 100%;
`;

const Member = styled.div`
  width: 100%;
`;

const Buttons = styled.div`
  width: 100%;
`;

const Edit = styled.div`
  width: 100%;
`;

const Delete = styled.div`
  width: 100%;
`;


export default class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }

  getTeams() {
    axiosWithAuth()
      .get(`/teams`, {})
      .then(res => {
        const data = res.data
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount(){
    this.getTeams()
}

  render() {
    return (
      <Container>
        <div>
          <TeamName>
            Team 1
        </TeamName>
          <Member>
            Member 1
        </Member>
          <Member>
            Member 2
        </Member>
        </div>
        <Buttons>
          <Edit size="small">Edit</Edit>
          <Delete size="small">Delete</Delete>
        </Buttons>
      </Container>
    );
  }
}