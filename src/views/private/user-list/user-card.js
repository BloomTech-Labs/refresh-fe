import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser } from '../actions/actions';

import styled from 'styled-components';

const ProfileCard = styled.div`
background: white;
width: 250px;
padding: 30px;
border-radius: 3px;
margin: 30px;


.close {
    position: relative;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before, .close:after {
    position: relative;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }


  .ele div.x {
    -webkit-transition-duration:0.5s;
      transition-duration:0.5s;
    }
    
    .ele div.x.slow {
    -webkit-transition-duration:1s;
      transition-duration:1s;
    }
    
    ul { list-style:none;float:left;display:block;width:100%; }
    li { display:inline;width:25%;float:left; }
    .ele { width:25%;display:inline; }
    .x {
      float:left;
      position:relative;
      margin:0;
      padding:0;
      overflow:hidden;
      background:#CCC;
      border-radius:2px;
      border:solid 2px #FFF;
      transition: all .3s ease-out;
      cursor:pointer;
    }
    .x.large { 
      width:30px;
      height:30px;
    }
    
    .x.medium {
      width:20px;
      height:20px;
    }
    
    .x.small {
      width:10px;
      height:10px;
    }
    
    .x.switch {
      width:15px;
      height:15px;
    }
    .x.grow {
    
    }
    
    .x.spin:hover{
      background:#BB3333;
      transform: rotate(180deg);
    }
    .x.flop:hover{
      background:#BB3333;
      transform: rotate(90deg);
    }
    .x.t:hover{
      background:#BB3333;
      transform: rotate(45deg);
    }
    .x.shift:hover{
      background:#BB3333;
    }
    
    .x b{
      display:block;
      position:absolute;
      height:0;
      width:0;
      padding:0;
      margin:0;
    }
    .x.small b {
      border:solid 5px rgba(255,255,255,0);
    }
    .x.medium b {
      border:solid 10px rgba(255,255,255,0);
    }
    .x.large b {
      border:solid 15px rgba(255,255,255,0);
    }
    .x.switch b {
      border:solid 10px rgba(255,255,255,0);
    }
    
    .x b:nth-child(2){
      border-top-color:#FFF;
      top:-2px;
    }
    .x b:nth-child(2){
      border-left-color:#FFF;
      left:-2px;
    }
    .x b:nth-child(3){
      border-bottom-color:#FFF;
      bottom:-2px;
    }
    .x b:nth-child(1){
      border-right-color:#FFF;
      right:-2px;
    }
    

`


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
                <h2 onClick={passId}>{`${props.info.first_name} ${props.info.last_name}`}</h2>
                <h2>{`Team: ${props.info.team_id === null ? props.info.team_id = 'None' : props.info.team_id}`}</h2>
                <h2>
                    {`${props.info.points === null ? props.info.points = 0 : props.info.points} POINTS`}
                </h2>
                <h2>{props.info.email}</h2>
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
                    <button>Submit Team Change</button>
                    <div className='x spin medium'onClick={deleteUser}><b></b><b></b><b></b><b></b></div>
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


