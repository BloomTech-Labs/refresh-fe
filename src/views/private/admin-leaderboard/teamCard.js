import React, { useState } from "react";
import styled from "styled-components";
import EditTeamButton from "./editTeam";
import DeleteTeamButton from "./deleteButton";

const Card = styled.div`
  display: flex;
  background: white;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: -5%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 100%;

  h1 {
    flex-basis: 0;
  }

  .name {
    min-width: 15vw;
    text-align: left;
  }
  .points {
    flex-grow: 2;
    margin-right: 15vw;
    width: 30vw;
    
  }
  .blank {
    width: 17.5vw;
    text-align: right;
  }
  .editTeamButton {
      width: 100vw;
  }
`;

const Pencil = styled.i `
margin-right: 2%;
:hover {
    cursor: pointer;
    }   
`

const Xbutton = styled.i `
color: gray;
:hover {
    cursor: pointer;
    }   
`

const TeamCard = props => {
  // console.log('TeamCard Props: ', props)

  if (props.team === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <Card className='cardClass'>
      <h1 className="name">{props.team.name}</h1>
      <h1 className="points">{`${
        props.team.points === null ? (props.team.points = 0) : props.team.points
      }`}</h1>
          <Pencil>
        <EditTeamButton 
          id={props.team.id}
          editTeamName={props.editTeamName}
          makeRender={props.makeRender}
          render={props.render}
        />
        </Pencil>
        <Xbutton>
        <DeleteTeamButton
          makeRender={props.makeRender}
          render={props.render}
          id={props.team.id}
        />
        </Xbutton>
    </Card>
  );
};

export default TeamCard;
