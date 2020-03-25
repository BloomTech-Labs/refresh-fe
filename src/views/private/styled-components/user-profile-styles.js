import styled from 'styled-components';

export const ProfileCard2 = styled.div`
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

export const Title = styled.h1`
h1 { 
padding-top: 10%;
padding-bottom: 15%;
text-align: center;
overflow: hidden;
white-space: nowrap;
padding-right: 15%;
font-family: Roboto;
font-style: normal;
font-size: 40px;
line-height: auto;
color: #3B444B;
}
`

export const Dropdown = styled.select`
width: 250px;
height: 7vh;
border: 1px solid #E7E7E7;
box-sizing: border-box;
text-align-last:center;
`
export const ButtonX = styled.i `
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

export const Name = styled.div `

overflow: hidden;
white-space: nowrap;
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;

color: #4F5254;`

export const Blue = styled.div `
text-align: center;
overflow: hidden;
white-space: nowrap;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 15.2138px;
letter-spacing: 0.035em;

color: #3DA2ED;`
export const UserPage = styled.div`
display: flex;
align-content: center;
flex-direction: column;
margin-left: 20%;
`

export const Changes = styled.div`
margin-left: 20%;
`

export const ProfileCard = styled.div`
background: white;
width: 250px;
padding: 30px;
border-radius: 3px;
`
