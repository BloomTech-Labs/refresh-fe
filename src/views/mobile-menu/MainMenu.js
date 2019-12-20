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