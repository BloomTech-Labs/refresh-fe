// IMPORTS
// react
import React from 'react';
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

                    <h2>Name</h2>
                    <h3>Cohort - Section Lead</h3>
                    <span>Daily Points</span>
                    <h3>Role</h3>
                </UserSection>

                <LinkSection>

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
    height: 25%;
    border-bottom: 0.25rem solid #4745A1;
`
    
const LinkSection = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 1rem;
`

// EXPORT
export default MainMenu;