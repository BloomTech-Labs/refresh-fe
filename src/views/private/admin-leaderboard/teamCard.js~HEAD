import React, { Component } from 'react';
import styled from "styled-components";
import { axiosWithAuth } from './axiosWithAuth';
import DeleteButton from './deleteButton';
import TeamDetails from './teamDetails';
import AddTeam from './addTeam';

const Body = styled.div`
padding-left: 70px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-color: black;
`;

const Container = styled.div`
display: flex;
height: 80vh;
width: 90vw;
// max-width: 18rem;
// max-height: 18rem;
// height: 38vw;
// box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
// border-radius: 3px;
// margin: 0rem 0rem;
// display: center;
// background-color: ${props => props.color};
// padding: 1rem;
// color: #fff;

// @media screen and (max-width: 361px) {
//     height: 50vw;
//     width: 50vw;
// }

// @media screen and (min-width: 1200px) {
//     max-height: 17rem;
//     max-width: 17rem;
// }
// i {
//     /* font-size: calc(100vw / 20); */
// font-size: 1rem;
//     margin: 2rem 0;
//     @media screen and (min-width: 1000px) {
//         font-size: calc(100vw / 27);
//     }
// }

p {
  display: flex;
  flex-direction: row;
    font-size: 1.6rem;
    letter-spacing: 0.025rem;
    align-self: flex-start;
}

.name {
  color: red;
}

.items {
  display: flex;
  justify-content: space-evenly;
}
h2 {
  color: blue;
  display: flex;
  flex-direction: column;
  text-align: center;
}
h1 {
  font-weight: bold;
  text-align: center;
}

.blue {
  color: blue
  display: flex;
  flex-direction: column;
}

span {
    font-weight: bold;
    align-self: flex-start;
    margin-top: auto;
    
}`
  ;

const BlueWords = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const TeamName = styled.div`
background: white;
width: 90vw;
height: 90vh;
margin: 30px;
border-radius: 3px;
padding: 5%;
color: black;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);

`


const Member = styled.div`

`;

const Buttons = styled.div`
   text-align: center;
  position: absolute; 
  top: 5vh;
  right: 20vw;
`;

const Edit = styled.div`

`;

const Delete = styled.div`

`;

const Divider = styled.div `
`



export default class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      showTeamDetails: false,
      render: false

    };
  }

  makeRender(change) {
    console.log(change)
    this.setState({
      render: change
    });
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
          <div className='items'>
            <p className='name'>{t.name}</p>
            {/* users go here */}
            <p>{t.points}</p>
            <DeleteButton makeRender={this.makeRender.bind(this)} render={this.state.render} id={t.id}/>
            <button onClick={this.toggleTeamDetails.bind(this)}>TeamDetails</button>
            {this.state.showTeamDetails ?
              <TeamDetails
                text='Click "Close Button" to hide TeamDetails'
                closeTeamDetails={this.toggleTeamDetails.bind(this)} />
              : null
            }
          </div>)

        this.setState({ team })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getTeams()
  }

componentDidUpdate(prevprops, prevstate) {
  if (prevstate.render !== this.state.render) {
    this.getTeams()
  }
}

  render() {
    return (
      <Body>
      <Container>
        <TeamName>
        <Buttons>
          <DeleteButton />
          <AddTeam makeRender={this.makeRender.bind(this)} render={this.state.render} />
        </Buttons>
          <h1>LEADERBOARD</h1>
          <BlueWords>
            <h2>STANDINGS</h2>
            <h2>TEAM MEMBERS</h2>
            <h2>DETAILS</h2>
          </BlueWords>
          {this.state.team}
          {console.log("trying to style", this)}
        </TeamName>
        {/* <Member>
            Member 1
        </Member>
          <Member>
            Member 2
        </Member> */}
      </Container>
      </Body>
    );
  }
}