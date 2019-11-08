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
        status: 'closed'
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
                    <Column>
                    <UserHud>
                        <Avatar></Avatar>

                        <UserInfo>
                            <h2>Josh Cooter</h2>
                            <h2>Labs 18 - Megan</h2>
                            <h3 className='points'>69 points</h3>
                        </UserInfo>
                    </UserHud>

                    <Navigation>
                        <NavButton><i class="fas fa-home"></i>Home</NavButton>
                        <NavButton><i class="fas fa-gamepad"></i>Leaderboard</NavButton>
                        <NavButton><i class="fas fa-users"></i>Team</NavButton>
                        <NavButton><i class="fas fa-calendar-alt"></i>Weekly Challenge</NavButton>
                        <NavButton><i class="fas fa-stopwatch"></i>Pomodoro Clock</NavButton>
                    </Navigation>
                    </Column>
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
        background-color: rgb(100,135,255, 0.9);
        transition: 0.5s ease-in-out;
    }

        .open {
            width: 70vw;
            height: 100vh;
            position: fixed;
            right: 30vw;
            background-color: rgb(100,135,255, 0.9);
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

const Column = styled.div`
    margin-bottom: auto;
    width: 100%;
`

const UserHud = styled.div`
    width: 100%;
    height: 20rem;
    margin-top: 5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
`

const Navigation = styled.div`
    width: 100%;
`

const Avatar = styled.div`
    width: 100px;
    height: 100px;
    margin: 3rem;
    background-image: url('https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1');
    background-size: cover;
    background-color: red;
    border-radius: 10px;
`

const UserInfo = styled.div`
    width: 50%;
    height: 10rem;
    padding: 1rem;
    color: #FFF;
    margin: 1rem;
    margin-right: auto;

        .points {
            color: #28C96C;
        }
`

const NavButton = styled.div`
        width: 100%;
        height: 5rem;
        margin: 2rem 0;
        padding: 1rem;
        font-size: 2.5rem;
        color: #FFF;
        display: flex;
        flex-flow: row nowrap;
        justify-content: left;
        align-items: center;
     

            i {
                margin: 2rem 4rem 2rem 2rem;
                font-size: 3rem;
            }
`

// EXPORT
export default MobileMenu;