import React from 'react';
import styled from 'styled-components';
import waves from "../../images/Onboarding/waves.svg";
import maxine from '../profileViews/maxine.jpg';

const EditContainer = styled.div`
border: 1px solid red;
position: relative;
width: 37.5rem;
height: 81.2rem;

/* bg */

background: url(.png), #4742BC;
` 
const EditText = styled.h1`
position: absolute;
left: 0%;
right: 0%;
top: 11.95%;
bottom: 85.34%;
font-family: Catamaran;
font-style: normal;
font-weight: bold;
font-size: 2.4rem;
line-height: 2.2rem;
/* or 22px */

display: flex;
align-items: flex-end;
text-align: center;
letter-spacing: 0.035em;

/* main / TEXT */

color: #E6E6E6;
` 
const User = styled.div`
position: absolute;
width: 6.4rem;
height: 6.4rem;
left: 16rem;
top: 5.1rem;
`

const UserAv = styled.img`
position: absolute;
width: 5rem;
height: 5rem;
border-radius: 50%;
background: #C4C4C4;
`

const EditProfile = props => {

    const routeToOverview = evt =>{
        evt.preventDefault();
        props.history.push('/profile-overview');
    }
    return (
        <>
        <EditContainer src={waves}>
            <EditText>Edit Profile</EditText>
            <User>
            <UserAv src={maxine} onClick={()=>routeToOverview()}></UserAv>
            </User>
        </EditContainer>
        </>
    )
}

export default EditProfile;