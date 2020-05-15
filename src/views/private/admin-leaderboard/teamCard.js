import React, { useState } from "react";
import styled from "styled-components";
import EditTeamButton from "./editTeam";
import DeleteTeamButton from "./deleteTeamButton";


const Pencil = styled.i `
margin-right: 2%;
:hover {
    cursor: pointer;
    }   
`

const Xbutton = styled.i `
color: black;
margin-left: 20px;
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
    <div className='cardClass'>
      <p className="name">{props.team.name}</p>
      <p className="points">{`${
        props.team.points === null ? (props.team.points = 0) : props.team.points
      }`}</p>

        <div className='team-card-buttons'>
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
        </div>
        
    </div>
  );
};

export default TeamCard;
