import React from 'react';
import styled from 'styled-components';
import Arrow from '../../images/profile/purple_right_arrow.svg';

const BadgesWidget = styled.div`
    width: 80%;
    height: 20rem;
    margin: 2rem 0;
    margin-top: 0;
    background-color: #D4F7E3;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

        h3 {
            align-self: flex-start;
            color: #28C96C;
            margin-top: auto;
            margin-left: 2rem;
        }


`

const NextAction = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #6762E3;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
`

const NextArrow = styled.img`
    width: 10%;
    height: auto;
    align-self: flex-end;
    margin: auto 1rem 1rem 0;
`

// This component is to display badges earned in user Missions
const Badges = () => {
    return (
        <>
         <BadgesWidget>
            <h3>your<br /> badges</h3>
            <NextAction>
                <NextArrow src={Arrow} />
            </NextAction>
         </BadgesWidget>
        </>
    );

};

export default Badges;