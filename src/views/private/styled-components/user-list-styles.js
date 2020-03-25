import styled from 'styled-components';

export const List = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-left: 9%;
`
export const Body = styled.div`
margin-left: 120px;
width: 80%;

.ALLUSERS {
font-family: Roboto;
font-size: 20px;
padding-top: 2%;
padding-bottom: 2%;
margin-left: 9%;
}
`
export const Title = styled.h1`
font-family: Roboto;
font-size: 50px;
color: #3B444B;
padding-top: 2%;
padding-bottom: 2%;
margin-left: 9%;

h1 {
  font-size: 35px;
}
`


export const SearchFlex = styled.div `

@media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin-left: 0px;
    padding-left: 0px;
  }
`

export const SearchFlex2 = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-content: center;
margin-bottom: 2%;
`

export const Dropdown = styled.select`
height: 100%;
margin-right: 10px;
border: 1px solid #E7E7E7;
box-sizing: border-box;
text-align-last:center;
margin-left: 10px;
width: 150px;
`

export const Input = styled.div`
display: flex;

input {
  border: none;
}
`

export const Photo = styled.div`
position: absolute;
`