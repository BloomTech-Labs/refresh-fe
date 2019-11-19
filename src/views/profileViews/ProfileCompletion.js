// IMPORT 
// react 
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// images
import UserImage from '../../images/profile/user.svg';
import RightArrow from '../../images/profile/purple_right_arrow.svg';

// COMPONENT
const ProfileCompletion = () => {
    return (
        <>
            <ProfileWidget>
                <h3>Profile</h3>
                <UserPlaceholder src={UserImage} />
                <span>75%</span>
                <span>completion</span>
                <FinishAction>
                    <p>Finish now</p>
                    <img src={RightArrow} />
                </FinishAction>
            </ProfileWidget>
        </>
    );
};

// STYLED COMPONENTS
const ProfileWidget = styled.div`
    width: 80%;
    height: 18rem;
    margin: 2rem 0;
    margin-top: 0;
    background-color: #CCC9FF;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

        h3 {
            color: #6762E3;
            font-size: 1.5rem;
        }

        span {
            color: #6762E3;
        }
`

const UserPlaceholder = styled.img`
    width: 30%;
    height: auto;
`

const FinishAction = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #6762E3;
    margin-top: auto;

        img {
            width: 10%;
            height: auto;
        }
`

// EXPORT
export default ProfileCompletion;