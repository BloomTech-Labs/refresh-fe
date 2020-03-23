import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser, fetchTeams, fetchUserTeamName } from '../actions/actions';

import styled from 'styled-components';

const ProfileCard = styled.div`
background: white;
padding-top: 42%;
width: 300px;
height: 300px;
border-radius: 14px;
margin-right: 2%;
margin-bottom: 5%;
border: 3px solid #E7E7E7;
box-sizing: border-box;
form {
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
margin-top: 2%;
}
h3 {
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
}
.fas fa-times {
float: right;
background-color: red;
width: 25px;
height: 25px;
left: 300px;
top: 395px;
margin-top: 2%;
border: 1px solid #E7E7E7;
box-sizing: border-box;
}
`
const Dropdown = styled.select`
width: 70%;
height: 30%;
margin-left: 15%;
margin-top: 2%;
border: 1px solid #E7E7E7;
box-sizing: border-box;
text-align-last:center;
`
const ButtonX = styled.i `
float: right;
position: relative;
margin-top: -40%;
margin-right: 2%;
padding: 2%;
box-sizing: border-box;
color: red; 
:hover {
    cursor: pointer;
}
`
const Name = styled.div `
overflow: hidden;
white-space: nowrap;
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 1.875rem;
line-height: 23px;
color: #4F5254;
padding-bottom: 2%;
`
const Blue = styled.div `
text-align: center;
overflow: hidden;
white-space: nowrap;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 1.575rem;
letter-spacing: 0.035em;
color: #3DA2ED;
padding-top: 5%;
`
const UserCard = props => {
    console.log('Usercard Props: ', props)

    const passId = () => {
        props.routeToUserProfile(props.info.id)
    }

    const handleSubmit = event => {
        let editedTeam = { team_id: event.target.value }
        event.preventDefault();
        if(editedTeam) {
            props.updateUserTeam(props.info.id, editedTeam)
            setTimeout(() => {props.rerender(!props.update)}, 100)
        } 
    }

    const deleteUser = event => {
        event.preventDefault();
        props.deleteUser(props.info.id)
        setTimeout(() => {props.rerender(!props.update)}, 100)
    }


    return (
        <div>
            <ProfileCard>
                
                    <ButtonX>
                    <i class="fas fa-times fa-2x" onClick={deleteUser}></i>
                    </ButtonX>
                <Name>
                <h2 onClick={passId}>{`${props.info.first_name} ${props.info.last_name}`}</h2>
                </Name>
                <h3>{props.info.email}</h3>
                <Blue>
                <h2>
                    {`${props.info.points === null ? props.info.points = 0 : props.info.points} POINTS`}
                </h2>
                </Blue>
                <Dropdown onChange={handleSubmit}>
                    <option>
                        {`${props.info.team_id === null ? props.info.team_id = 'None' : props.info.name}`}
                    </option>
                    {props.teams.map((name, index) => {
                        return (
                            <option key={index} value={name.id}>{name.name}</option>
                        )
                    })}
                </Dropdown>
            </ProfileCard>
        </div>
    )
}

export default connect(
    state => {
        return {
            teamName: state.teamName,
            teams: state.teams,
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { updateUserTeam, deleteUser, fetchTeams, fetchUserTeamName}
)(UserCard);