import React from 'react';
import styled from 'styled-components';

export const List = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-right: 5%;
`
export const Body = styled.div`
display: flex;  
flex-direction: column;  
height: 90vh;
width: auto;
margin-left: 120px;
padding-left: 5%;
@media (max-width: 768px) {
    padding-left: 0%;
  }

.ALLUSERS {
text-decoration: underline;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;
font-variant: small-caps;

}
`
export const Title = styled.h1`
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

font-variant: small-caps;

color: #3B444B;
}
`


export const SearchFlex = styled.div `
display: flex;
justify-content: space-around;
text-align: center;
padding-right: 15%;
padding-top: 2%;
padding-bottom: 3%;
@media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin-left: 0px;
    padding-left: 0px;
  }

`
export const SearchFlex2 = styled.div `
display: flex;
justify-content: space-between;
margin-left: 50%;
@media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin-left: 0px;
    padding-left: 0px;
    padding-top: 5%;
  }
.toggleButton {
    margin-left: 10%;
    @media (max-width: 768px) {
        margin-left: 0px;
        padding-top: 5%;
    }
}
.blueInput {
    border-radius: 5px;
    border: none;
    width: 175px;
    height: 50px;
    box-sizing: border-box;
    text-align: center;
    ::placeholder {
  color: blue;
}
}
`