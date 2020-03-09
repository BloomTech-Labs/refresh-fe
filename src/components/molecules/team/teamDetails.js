import React, { Component } from 'react';
import styled from "styled-components";
import {axiosWithAuth} from './axiosWithAuth'

const TeamDetails = styled.div`  
  position: fixed;  
  width: 100%;  
  height: 100%;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  margin: auto;  
  background-color: rgba(0,0,0, 0.5);  
`;
const TeamDetailsInner =styled.div` 
  position: absolute;  
  left: 25%;  
  right: 25%;  
  top: 25%;  
  bottom: 25%;  
  margin: auto;  
  border-radius: 20px;  
  background: white;  
`;

export default class Popup extends React.Component {  
    render() {  
  return (  
  <TeamDetails>  
  <TeamDetailsInner>  
  <h1>{this.props.text}</h1>  
  <button onClick={this.props.closePopup}>close me</button>  
  </TeamDetailsInner>  
  </TeamDetails>  
  );  
  }  
  }  