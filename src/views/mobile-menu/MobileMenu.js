// IMPORTS
// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins'

// COMPONENT
const MobileMenu = () => {
    // state hooks
    const [menu, setMenu] = useState({
        status: 'open'
    });

    // use effect
    // todo

    // handlers
    const menuToggle = () => {
        menu.status === 'closed' ?
        setMenu({ ...menu, status: 'open' }) :
        setMenu({ ...menu, status: 'closed' })
    };

    // RENDER
    return (
        <Wrapper>
            <DrawerContainer>
                <Drawer className={menu.status}>
                    <UserHud>
                        <Avatar></Avatar>

                        <UserInfo>
                            <h2>Josh Cooter</h2>
                            <h2>Labs 18 - Megan</h2>
                            <h3>69 points</h3>
                        </UserInfo>
                    </UserHud>

                    <Navigation>
                        <NavButton><i class="fas fa-caret-square-down"></i>Home</NavButton>
                        <NavButton><i class="fas fa-caret-square-down"></i>Leaderboard</NavButton>
                        <NavButton><i class="fas fa-caret-square-down"></i>Team</NavButton>
                        <NavButton><i class="fas fa-caret-square-down"></i>Weekly Challenge</NavButton>
                    </Navigation>
                </Drawer>
            </DrawerContainer>
            <PlaceholderButton onClick={menuToggle}><i class="fas fa-bars"></i></PlaceholderButton>
            
        </Wrapper>
    );

};

// STYLED COMPONENTS
const Wrapper = styled.div`
    width: 100vw;
    position: fixed;
`

const Container = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: 5rem;
    ${flex.flexRowNoWrapAround}
    z-index: 1;

        button:active {
            border: none;
            text-decoration: none;
            outline: none;
        }
`

const PlaceholderButton = styled.button`
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: none;
    color: #FFF;
    font-size: 2rem;
    margin: 2rem auto 2rem 2rem;
`

const DrawerContainer = styled.div`
    width: 70vw;
    height: 90vh;
    position: fixed;
    z-index: -3;

    .closed {
        width: 70vw;
        height: 100vh;
        position: fixed;
        right: 100vw;
        background-color: #6487FF;
        transition: 0.5s ease-in-out;
    }

        .open {
            width: 70vw;
            height: 100vh;
            position: fixed;
            right: 30vw;
            background-color: #6487FF;
            transition: 0.5s ease-in-out;
            box-shadow: 2px 3px 15px 2px black;
        }
`

const Drawer = styled.div`
    positon: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const UserHud = styled.div`
    width: 100%;
    height: 20rem;
    margin-top: 5rem;
    margin-bottom: auto;
    ${flex.flexRowNoWrapAround}
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
`

const Navigation = styled.div`
    width: 100%;
    margin-bottom: auto;
    background-color: blue;
`

const Avatar = styled.div`
    width: 100px;
    height: 100px;
    background-image: url('https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1');
    background-size: cover;
    border-radius: 10px;
`

const UserInfo = styled.div`
    width: 60%;
    height: 10rem;
    padding: 1rem;
    background-color: green;
`

const NavButton = styled.div`
        width: 100%;
        height: 5rem;
        margin: 2rem 0;
        font-size: 3rem;
        color: #FFF;
        display: flex;
        flex-flow: row nowrap;
        justify-content: left;
        align-items: center;
        background-color: red;

            i {
                margin: 1rem;
            }
`

// EXPORT
export default MobileMenu;