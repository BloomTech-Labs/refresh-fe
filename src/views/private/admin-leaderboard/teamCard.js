import React, { useState } from 'react';
import styled from 'styled-components';




const Card = styled.div`
    background: white;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 10px;
`

const TeamCard = props => {
    console.log('TeamCard Props: ', props)

    if(props.team === undefined) {
        return <h1>Loading...</h1>
    }

    return (
        <Card>
            <h1>{props.team.name}</h1>
            <h1>{`${props.team.points === null ? props.team.points = 0 : props.team.points}`}</h1>
        </Card>
    )
}

export default TeamCard;