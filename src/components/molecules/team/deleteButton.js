import React, { Component } from 'react';
import styled from "styled-components";
import {axiosWithAuth} from './axiosWithAuth'

export default class deleteButton extends Component {
    constructor(props) {
      super(props);
    }
  
    deleteTeams() {
      axiosWithAuth()
        .delete(`/teams/{id}`, {params})
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