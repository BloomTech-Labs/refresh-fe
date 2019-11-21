import React from 'react'
import styled from 'styled-components';

const WeightHeight = (props) =>{
    const sliderScale=(unit,range)=>{
       let items = []
       for(let i = 200 ; i < range; i++){
           if((i/2) % unit === 0){
            items.push('|')
           } else {
            items.push('.')
           }
        }
        return items
    }
    return(
        <>
            <WeightContainer>
    {sliderScale(1,500).map((x,i)=> <DialStuff><p onClick={() => console.log(x)}>{x}</p></DialStuff>)}
            </WeightContainer>
        </>
    )
}

export default WeightHeight;

const WeightContainer = styled.div`
max-width:29rem;
display:flex;
flex-wrap: nowrap;
overflow-x:auto;
font-size:6rem;
`
const DialStuff = styled.div`
flex: 0 0 auto;

`;