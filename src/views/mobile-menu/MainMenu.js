// IMPORTS
// react
import React from 'react';
// router
import { Link } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MainMenu = () => {
    return (
        <>
        <MenuWrapper>
            <NavArea>
                <UserSection>
                    <img src='https://tricityescaperooms.com/wp-content/uploads/2018/01/person-placeholder-male-5.jpg' alt='placeholder' />

                    <UserInfo>
                    <h2>Name</h2>
                    <h3>Cohort - Section Lead</h3>
                    <span>Daily Points</span>
                    <h3>Role</h3>
                    </UserInfo>
                </UserSection>

                <LinkSection>
                    <ul>
                        <li><i class="fas fa-tint"></i> <Link to=''>Home</Link></li>
                        <li><i class="fas fa-tint"></i> <Link to=''>Leaderboard</Link></li>
                        <li><i class="fas fa-tint"></i> <Link to=''>Team</Link></li>
                        <li><i class="fas fa-tint"></i> <Link to=''>Weekly Missions</Link></li>
                        <li><i class="fas fa-tint"></i> <Link to=''>Pomodoro Timer</Link></li>
                        <li><i class="fas fa-tint"></i> <Link to=''>Rewards</Link></li>
                    </ul>
                </LinkSection>
            </NavArea>
        </MenuWrapper>
        </>
    );
};

// STYLED COMPONENTS
const MenuWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
`

const NavArea = styled.div`
    width: 70%;
    height: 100%;
    background-color: #3D3B91;
`

const UserSection = styled.div`
    width: 100%;
    height: 20%;
    border-bottom: 0.25rem solid #4745A1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    color: #FFF;

        img {
            width: 8rem;
            height: 8rem;
            border-radius: 100px;
        }
`

const UserInfo = styled.div`
    margin-right: 2rem;
        
    h2, h3 {
        font-size: 1.25rem;
    }

    h3:last-child {
        color: #E05CB3;
    }
`
    
const LinkSection = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 1rem;

        ul li {
            height: 3rem;
            margin: 1rem 0;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            font-size: 2rem;
            color: #B8B7E1;
        }

        ul li:first-child {
            margin-top: 5rem;
        }

        ul li:hover {
            background-color: #4745A1;
        }

        a {
            text-decoration: none;
            color: #B8B7E1;
            margin: 0 1.5rem;
        }

        i {
            margin-left: 5rem;
        }
        
`

// EXPORT
export default MainMenu;