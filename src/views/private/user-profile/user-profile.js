import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser, fetchUser, fetchTeams, fetchUserTeamName } from '../actions/actions';
import styled from 'styled-components'


//This is the user profile page on the admin side. We didn't touch this on the restyling of the admin side. 



const ProfileCard2 = styled.div`
background: white;
padding-top: 43%;
width: 300px;
height: 300px;
border-radius: 14px;
margin-right: 2%;
margin-bottom: 5%;
border: 1px solid #E7E7E7;
box-sizing: border-box;
@media (max-width: 768px) {
    margin: 20px;
    padding-top: 43%;

    }
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

const Title = styled.h1`
h1 { 
padding-top: 7%;
padding-bottom: 15%;
text-align: center;
overflow: hidden;
white-space: nowrap;
padding-right: 15%;
font-family: Roboto;
font-style: normal;
font-size: 35px;
line-height: auto;
color: #3B444B;
}
`

const Dropdown = styled.select`
width: 250px;
height: 7vh;
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
color: lightgrey; 
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
margin-left: 13%;
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

    
    if(props.singleUser === undefined) {
        return <h1>Loading</h1>
    } else {
        return (
            <UserPage>
                <Title>
                <h1>User Profile</h1>
                </Title>
                <ProfileCard2>
                    <ButtonX>
                    <i className="fas fa-times fa-2x" onClick={deleteUser}></i>
                    </ButtonX>
                    
                    <div className='profile'>
                    <Name>
                        <h2>{`${props.singleUser.full_name}`}</h2>
                        
                        </Name>
                        <h3>{props.singleUser.email}</h3>
                        <Blue>
                        
                        <h2>
                            {`${props.singleUser.total_points === null ? props.singleUser.total_points = 0 : props.singleUser.total_points} POINTS`}
                        </h2>
                        </Blue>
                    </div>


                    
                    <form>
                        <Dropdown onChange={handleSubmit}>
                        <option>
                            {`${props.singleUser.name === null ? props.singleUser.name = 'None' : props.singleUser.name}`}
                        </option>
                        {props.teams.map((name, index) => {
                            return (
                                <option key={index} value={name.id}>{name.name}</option>
                            )
                        })}
                        </Dropdown>
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
            teams: state.reducer.teams,
            allUsers: state.reducer.allUsers,
            singleUser: state.reducer.singleUser,
            isFetching: state.reducer.isFetching,
            error: state.reducer.error
        }
    },
    { updateUserTeam, deleteUser, fetchUser, fetchTeams, fetchUserTeamName }
)(UserProfile);

