import React from 'react';
import styled from 'styled-components';

const Rectangle70 = styled.div`
position: absolute;
width: 123px;
height: 149px;
left: 231px;
top: 624px;

background: #D4F7E3;
border-radius: 2px;
`

const YourBadges = styled.text`
position: absolute;
width: 53px;
height: 14px;
left: 245px;
top: 683px;

font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 119%;
/* or 18px */

letter-spacing: 0.035em;

/* primary / active */

color: #28C96C;
`


const Badges = () => {

    return(
        <div>
            <Rectangle70/>
            <YourBadges>your badges</YourBadges>
        </div>
    );
};

export default Badges
