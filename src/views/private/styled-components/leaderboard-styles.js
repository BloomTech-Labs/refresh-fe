import styled from 'styled-components';

export const Container = styled.div`
background-color: white;
    font-family: Roboto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-left: 150px;
    margin-right: 20px;
    @media (max-width: 768px) {
        margin-left: 101px;
        margin-right: 101px;
        .cardClass {
            justify-content: flex-start;
        }
        i {
            width: 5vw;
            margin: 0;
            padding: 0;
        }
        .points {
        }
    }
.teamCardFlex {
    display: flex;
    width: 100%;
    border-bottom: 1px solid gray;
    @media (max-width: 768px) {
        display: initial;
        justify-content: flex-start;
    }
}
.addTeam {
    align-content: right;
    float: right;
    padding: 2%;
    padding-top: 0%;
    padding-left: 1%;
    font-family: Roboto;
    @media (max-width: 768px) {
        text-align: center;
    }
}
.plusButton {
    width: 90vw;
}
.blank {
    width: 10vw;
}
`
export const Title = styled.h1 ` 
font-family: Roboto;
font-size: 35px;
color: #3B444B;
padding-top: 2%;
margin-left: 20px;
padding-bottom: 2%;
`
export const BlueFlex = styled.div `
text-align: center;
overflow: hidden;
white-space: nowrap;
display: flex;
justify-content: space-between;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 15.2138px;
letter-spacing: 0.035em;
margin-top: 2%;
margin-left: 20px;
margin-bottom: 2%;
color: black;
`
export const AddTeam = styled.i `
display: flex;
flex-direction: row;
font-weight: bold;
float: right;
text-decoration: underline;
text-align: right;
color: #3DA2ED;
font-variant: small-caps;
font-family: Roboto;
font-size: 15.2138px;
letter-spacing: 0.035em;
@media (max-width: 768px) {
        text-align: center;
        .addTeam {
            display: none;
        }
    }
.fas{
:hover {
    cursor: pointer;
}
}
`