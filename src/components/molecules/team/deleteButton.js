import React, { Component } from 'react';
import styled from "styled-components";
import {axiosWithAuth} from './axiosWithAuth'

export default class deleteButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: ''
      }
    }
  
    deleteTeams(id) {
      axiosWithAuth()
        .delete(`/teams/${this.state.id}`)
        .then(() => {
          console.log("Deleted")
        })
        .catch((error) => {
          console.log(error)
        })
    }
  

    //   this.deleteTeams()
  
    render() {
      return (
        <button onClick = "this.deleteTeams()">
            Delete Team
        </button>
      );
    }
  }