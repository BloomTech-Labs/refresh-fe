import React from 'react';
import styled from 'styled-components';
//import {Link} from 'react-router-dom';



const Rectangle50 = styled.div`
position: absolute;
width: 134px;
height: 207px;
left: 221px;
top: 233px;

/* primary / disabled */

background: #CCC9FF;
/* mobile / dashboard dropshadow */

box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 2px;
`

const ProfileText = styled.h5`
position: absolute;
width: 46px;
height: 9px;
left: 265px;
top: 232px;

font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 44%;
/* or 7px */

letter-spacing: 0.02em;

/* primary / purple */

color: #6762E3;
`
const Percentage75 = styled.h1`
position: absolute;
width: 35px;
height: 15px;
left: 270px;
top: 345px;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 35px;
line-height: 44%;
/* or 15px */

letter-spacing: 0.02em;

/* primary / purple */

color: #6762E3;
`

const Rectangle58 = styled.div`
position: absolute;
width: 134px;
height: 34px;
left: 221px;
top: 406px;

/* primary / purple */

background: #6762E3;
/* mobile / dashboard dropshadow */

box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 0px 0px 2px 2px;
`
const CompletionText = styled.h1`
position: absolute;
width: 66px;
height: 6px;
left: 255px;
top: 375px;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 44%;
/* identical to box height, or 6px */

letter-spacing: 0.02em;

/* primary / purple */

color: #6762E3;

`

const FinishNowText = styled.h1`
position: absolute;
width: 57px;
height: 7px;
left: 236px;
top: 419px;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 44%;
/* or 5px */

letter-spacing: 0.02em;

/* primary / disabled */

color: #CCC9FF;
`
const PercentageCard = () => {
    return (
        <>
        <Rectangle50/>
        <ProfileText>profile</ProfileText>
        <Percentage75>75%</Percentage75>
        <CompletionText>completion</CompletionText>
        <Rectangle58/>
        <FinishNowText>Finish now</FinishNowText>
       
        </>
    );
};

export default PercentageCard;