import React from 'react'
import styled from 'styled-components';

const WeightHeight = (props) =>{
    const sliderScale=(unit,range)=>{
       let items = []
       for(let i = 0 ; i < range; i++){
           if(i % unit === 0){
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
                {sliderScale(2,50).map((x,i)=> <DialStuff>{x}</DialStuff>)}
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
flex: 0 0 auto`;