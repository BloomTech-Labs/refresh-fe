import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser, fetchUser, fetchTeams, fetchUserTeamName } from '../actions/actions';
import styled from 'styled-components';


const ProfileCard2 = styled.div`
background: white;
padding-top: 43%;
width: 20vw;
height: 20vw;
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

const Title = styled.h1`
h1 { 
padding-top: 2%;
padding-bottom: 2%;
text-align: center;
overflow: hidden;
white-space: nowrap;
padding-right: 15%;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: auto;
/* identical to box height */

font-variant: small-caps;

color: #3B444B;
}
`

const Buttons = styled.select`
width: 250px;
height: 46px;
left: 300px;
top: 395px;
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
const UserPage = styled.div`
display: flex;
align-content: center;
flex-direction: column;
margin-left: 20%;
`

const Changes = styled.div`
margin-left: 20%;
`

const ProfileCard = styled.div`
background: white;
width: 250px;
padding: 30px;
border-radius: 3px;
`

const UserProfile = props => {
    const [changing, setChanging] = useState(false)

    const handleSubmit = event => {
        let editedTeam = { team_id: event.target.value }
        event.preventDefault();
        if(editedTeam) {
            props.updateUserTeam(props.match.params.id, editedTeam)
            setTimeout(() => {setChanging(!changing)}, 100)
        } 
    }

    const deleteUser = event => {
        event.preventDefault();
        props.deleteUser(props.match.params.id)
        setChanging(!changing)
        setTimeout(() => {props.history.push('/users')}, 100)
    }


    useEffect(() => {
        props.fetchUser(props.match.params.id)
        props.fetchTeams()
    }, [changing])

    useEffect(() => {
        props.fetchUserTeamName(props.match.params.id)
    }, [])



    if(props.singleUser === undefined) {
        return <h1>Loading</h1>
    } else {
        return (
            <UserPage>
                <Title>
                <h1>USER PROFILE</h1>
                </Title>
                <ProfileCard2>
                    <ButtonX>
                    <i class="fas fa-times fa-2x" onClick={deleteUser}></i>
                    </ButtonX>
                    
                    <div className='profile'>
                    <Name>
                        <h2>{`${props.singleUser.first_name} ${props.singleUser.last_name}`}</h2>
                        
                        </Name>
                        <h3>{props.singleUser.email}</h3>
                        <Blue>
                        
                        <h2>
                            {`${props.singleUser.points === null ? props.singleUser.points = 0 : props.singleUser.points} POINTS`}
                        </h2>
                        </Blue>
                    </div>
                    
                    <form>
                        <Buttons onChange={handleSubmit}>
                        <option>
                            {`Current:  ${props.singleUser.team_id === null ? props.singleUser.team_id = 'None' : props.singleUser.name}`}
                        </option>
                        {props.teams.map((name, index) => {
                            return (
                                <option key={index} value={name.id}>{name.name}</option>
                            )
                        })}
                        </Buttons>
                    </form>
                </ProfileCard2>
            </UserPage>
        )
    }
}



export default connect(
    state => {
        return {
            teamName: {},
            teams: state.teams,
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { updateUserTeam, deleteUser, fetchUser, fetchTeams, fetchUserTeamName }
)(UserProfile);

