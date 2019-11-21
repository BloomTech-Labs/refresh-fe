import React from 'react'
import styled from 'styled-components';

const WeightHeight = (props) =>{
    const sliderScale=(unit,range)=>{
       let items = []
       for(let i = 100 ; i < range; i++){
           if(i % unit === 0){
           items.push(<><div className="bigtick"><p>|</p><p>{i}</p></div><div className="smalltick"data-value={i + 0.5}>|</div></>)
           } else{
            items.push(<div className="smalltick"data-value={i + 0.5}>|</div>)
           }
        }
        return items
    }
    return(
        <>
            <WeightContainer>
    {sliderScale(1,500).map((x,i)=> <DialStuff key={i}>{x}</DialStuff>)}
            </WeightContainer>
        </>
    )
}

export default WeightHeight;

const WeightContainer = styled.div`
max-width:29rem;
height: 11rem;
display:flex;
flex-wrap: nowrap;
align-content:center;
align-items:center;
overflow-x:auto;
font-size:2rem;

    .bigtick{
        display:flex;
        flex-direction:column;
        color: black;
        margin-left:5rem;
    }

    .smalltick{
        margin-top: -6rem;
    }

`
const DialStuff = styled.div`
flex: 0 0 auto;

`;