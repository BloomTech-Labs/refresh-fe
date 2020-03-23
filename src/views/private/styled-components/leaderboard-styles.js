import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-left: 120px;
    margin-right: 20px;
    @media (max-width: 768px) {
        margin-left: 101px;
        margin-right: 1px;
    }
.teamCardFlex {
    display: flex;
    width: 100%;
}
.addTeam {
    align-content: right;
    padding: 500%;
}
`
export const Title = styled.h1 ` 
    padding-top: 2%;
    padding-bottom: 2%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 15%;
    padding-left: 12.5%;    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: auto;
    
    font-variant: small-caps;
    
    color: #3B444B;
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
margin-bottom: 2%;
color: #3DA2ED;
`
export const AddTeam = styled.i `
float: right;
margin-right: fixed;
text-align: right;
color: #3DA2ED;
font-variant: small-caps;
font-family: Roboto;
font-size: 15.2138px;
letter-spacing: 0.035em;
@media (max-width: 768px) {
        text-align: center;
    }
.fas{
:hover {
    cursor: pointer;
}
}
`