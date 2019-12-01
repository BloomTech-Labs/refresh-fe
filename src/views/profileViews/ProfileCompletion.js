import React from 'react';
import styled from 'styled-components';
import UserImage from '../../images/profile/user.svg';
import RightArrow from '../../images/profile/purple_right_arrow.svg';

const ProfileWidget = styled.div`
    width: 80%;
    height: 20rem;
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
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        span {
            color: #6762E3;
            font-size: 2.5rem;
            font-weight: bold;

        }

        p {
            color: #6762E3;
        }
`

const UserPlaceholder = styled.img`
    width: 35%;
    height: auto;
    margin-bottom: 1.5rem;
`

const FinishAction = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #6762E3;
    margin-top: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

        img {
            width: 8%;
            height: auto;
        }

        p {
            color: #CCC9FF;
        }
`
// This component displays the % of profile completed
const ProfileCompletion = () => {
    return (
        <>
            <ProfileWidget>
                <h3>Profile</h3>
                <UserPlaceholder src={UserImage} />
                <span>75%</span>
                <p>completion</p>
                <FinishAction>
                    <p>Finish now</p>
                    <img src={RightArrow} />
                </FinishAction>
            </ProfileWidget>
        </>
    );
};


export default ProfileCompletion;