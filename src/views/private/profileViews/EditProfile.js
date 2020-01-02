import React from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
import waves from "../../images/Onboarding/waves.svg";

const ComingSoon = styled.h1`
width: 100vw;
height: 100vh;
padding-top: 10rem;
background: #4742bc;
background-image:url(${waves});
z-index: -3;
`
const ReturnButton = styled.button`
border: 1px solid #0000;
color: #ffff;
border-radius: 5%;
`


const EditProfile = props => {

    //routes
const routeToOverview = e => {
    e.preventDefault();
    props.history.push("/profile-overview");
  };
    return (
        <>
            <ComingSoon>Coming Soon: Edit Profile!</ComingSoon>
            <ReturnButton onClick={routeToOverview}>Return</ReturnButton>
        </>
    )
};

export default EditProfile;