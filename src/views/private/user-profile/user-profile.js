import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser, fetchUser } from '../actions/actions';
import styled from 'styled-components';


const ProfileCard2 = styled.div`
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
    console.log('UserProfile props: ', props)

    const [editUserTeam, setEditUserTeam] = useState({ team_id: '' })
    const [changing, setChanging] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        if(editUserTeam.team_id) {
            console.log('userId: ', props.match.params.id, 'teamId: ', editUserTeam)
            props.updateUserTeam(props.match.params.id, editUserTeam)
            setTimeout(() => {setChanging(!changing)}, 100)
        } else {
            alert('Select team before submitting edit')
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
    }, [changing])




    const onChange = event => {
        setEditUserTeam({ team_id: event.target.value })
        // console.log('editProfile team', editUserTeam)
    }

    // if(changing === true) {
    //     return <Changes>Changes submitted</Changes>
    // }

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
                        <h2>{`Team: ${props.singleUser.team_id === null ? props.singleUser.team_id = 'None' : props.singleUser.team_id}`}</h2>
                        
                        <h2>
                            {`${props.singleUser.points === null ? props.singleUser.points = 0 : props.singleUser.points} POINTS`}
                        </h2>
                        </Blue>
                    </div>
                    
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
                </ProfileCard2>
            </UserPage>
        )
    }
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
    { updateUserTeam, deleteUser, fetchUser }
)(UserProfile);

