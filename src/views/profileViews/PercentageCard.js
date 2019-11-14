import React from 'react';
import styled from 'styled-components';

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

const PercentageCard = () => {
    return (
        <>
        <Rectangle50/>
        <PercentageCard>%</PercentageCard>
        </>
    );
};

export default PercentageCard;