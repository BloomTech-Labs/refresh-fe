import React, { Component } from 'react';
import styled from "styled-components";
import {axiosWithAuth} from './axiosWithAuth'

export default class DeleteButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: ''
      }
    }
  
    deleteTeams(id) {
      axiosWithAuth()
        .delete(`/teams/${id}`)
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
        <button onClick = "this.deleteTeams(this.state.id)">
            Delete Team
        </button>
      );
    }
  }