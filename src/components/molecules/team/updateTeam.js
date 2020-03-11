import React, { Component } from 'react';
import styled from "styled-components";
import { axiosWithAuth } from './axiosWithAuth'


export function updateTeam(item) {
    return dispatch => {
        console.log(item)
        return axiosWithAuth
            .put(`/teams/${this.state.id}`, item)
            .then(response => {
                console.log(response)
            })


    }
}