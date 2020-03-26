import styled from 'styled-components';

export const List = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-end;
width: 71vw;
`
export const Body = styled.div`
margin-left: 120px;
width: 100%;
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

export const SearchFlex2 = styled.div`
display: flex;
justify-content: flex-end;
align-content: center;
margin-bottom: 2%;
width: 71vw;
`

export const Dropdown = styled.select`
height: 100%;
padding: 10px 0;
margin-right: 10px;
border: 1px solid #E7E7E7;
box-sizing: border-box;
text-align-last:center;
margin-left: 10px;
width: 150px;
`

export const Input = styled.div`
display: flex;
border: 1px solid #E5E5E5;
input {
  border: none;
}
`

export const Photo = styled.div`
position: absolute;
`