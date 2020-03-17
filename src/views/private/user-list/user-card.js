import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser } from '../actions/actions';

import styled from 'styled-components';

const ProfileCard = styled.div`
background: white;
width: 250px;
padding: 30px;
border-radius: 14px;
margin: 30px;

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
display: inline-block;
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
const Buttons = styled.button`
width: 120px;
height: 46px;
left: 300px;
top: 395px;
margin-top: 2%;
border: 1px solid #E7E7E7;
box-sizing: border-box;`


const ButtonX = styled.i `
display: inline-block;
float: right;
padding: 2%;
margin-top: 2%;
box-sizing: border-box;
transition: all 0.5s ease-out;
color: red; 
:hover {
    cursor: pointer;
    transform: rotate(360deg);
}
`

const Name = styled.div `

overflow: hidden;
white-space: nowrap;
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;

color: #4F5254;`

const Blue = styled.div `
text-align: center;
overflow: hidden;
white-space: nowrap;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 15.2138px;
letter-spacing: 0.035em;

color: #3DA2ED;`

const UserCard = props => {
    const [editUserTeam, setEditUserTeam] = useState({ team_id: '' })

    const passId = () => {
        props.routeToUserProfile(props.info.id)
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(editUserTeam.team_id) {
            props.updateUserTeam(props.info.id, editUserTeam)
            setTimeout(() => {props.rerender(!props.update)}, 100)
        } else {
            alert('Select team before submitting edit')
        }
    }

    const deleteUser = event => {
        event.preventDefault();
        props.deleteUser(props.info.id)
        setTimeout(() => {props.rerender(!props.update)}, 100)
    }

    const onChange = event => {
        setEditUserTeam({ team_id: event.target.value })
        // console.log('editProfile team', editUserTeam)
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
                <h2>{`Team: ${props.info.team_id === null ? props.info.team_id = 'None' : props.info.team_id}`}</h2>
                </Blue>
                <Blue>
                <h2>
                    {`${props.info.points === null ? props.info.points = 0 : props.info.points} POINTS`}
                </h2>
                </Blue>
                <form onSubmit={handleSubmit}>
                    <label>Edit team</label>
                    <select value={editUserTeam.team_id} onChange={onChange}>
                        <option></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                    </select>
                    <Buttons>
                    <div>Submit Team Change</div>
                    </Buttons>
                    
                </form>
            </ProfileCard>
        </div>
    )
}

export default connect(
    state => {
        return {
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { updateUserTeam, deleteUser }
)(UserCard);


