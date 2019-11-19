// IMPORT 
// react 
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const ProfileCompletion = () => {
    return (
        <>
            <ProfileWidget>

            </ProfileWidget>
        </>
    );
};

// STYLED COMPONENTS
const ProfileWidget = styled.div`
    width: 90%;
    height: 17rem;
    margin: 2rem 0;
    background-color: #CCC9FF;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

        h3 {
            color: #1575FF;
            font-size: 1.5rem;
            align-self: flex-start;
            margin-left: 1rem;
        }

        span {
            color: #9AB9E5;
        }
`

// EXPORT
export default ProfileCompletion;