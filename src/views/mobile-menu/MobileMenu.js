// IMPORTS
// react
import React, { useState } from 'react';
// router
import { Link } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins'

// DUMMY DATA
// hard coding some dummy data directly into the component to avoid too many unncessary files
// will come back and clean all of this up later when we wire up FE/BE - JC

const dummyUser = {
    username: 'JohnDoe',
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@gmail.com',
    cohort: 'Labs 18',
    team_lead: 'Dayton',
    section_lead: 'Megan',
    points: 69
};

// COMPONENT
const MobileMenu = () => {
    // state hooks
    const [menu, setMenu] = useState({
        status: 'open',
        darken: 'inactive'
    });

    // use effect
    // todo

    // handlers
    const menuToggle = () => {
        menu.status === 'closed' ?
        setMenu({ ...menu, status: 'open', darken: 'active' }) :
        setMenu({ ...menu, status: 'closed', darken: 'inactive' })
    };

    // RENDER
    return (
        <Wrapper>
            <Darken className={menu.darken}></Darken>
            <DrawerContainer>
                <Drawer className={menu.status}>
                    <Column>
                    <UserHud>
                        <Avatar></Avatar>

                        <UserInfo>
                            <h2>{dummyUser.first_name} {dummyUser.last_name}</h2>
                            <h2>{dummyUser.cohort} - {dummyUser.section_lead}</h2>
                            <h3 className='points'><i class="fas fa-piggy-bank"></i> {dummyUser.points} Points</h3>
                        </UserInfo>
                    </UserHud>

                    <Navigation>
                        <NavButton><Link to='/'><i class="fas fa-home"></i>Home</Link></NavButton>
                        <NavButton><Link to='/leaderboard'><i class="fas fa-gamepad"></i>Leaderboard</Link></NavButton>
                        <NavButton><Link to='/team'><i class="fas fa-users"></i>Team</Link></NavButton>
                        <NavButton><Link to='/weekly-challenge'><i class="fas fa-calendar-alt"></i>Weekly Challenge</Link></NavButton>
                        <NavButton><Link to='/pomodoro'><i class="fas fa-stopwatch"></i>Pomodoro Clock</Link></NavButton>
                        <NavButton><Link to='/rewards'><i class="fas fa-gem"></i>Rewards</Link></NavButton>
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

    .active {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: -5;
        transition: 0.5s;
    }

    .inactive {
        background-color: rgba(0, 0, 0, 0);
        transition: 0.5s
    }

    a {
        text-decoration: none;
        color: #FFF;
    }
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
        width: 90vw;
        height: 100vh;
        position: fixed;
        right: 100vw;
        background-color: rgb(100,135,255, 0.95);
        transition: 0.5s ease-in-out;
    }

        .open {
            width: 90vw;
            height: 100vh;
            position: fixed;
            right: 10vw;
            background-color: rgb(100,135,255, 0.95);
            transition: 0.5s ease-in-out;
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
    padding: 1rem 1rem 1rem 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
`


const Avatar = styled.div`
    width: 80px;
    height: 80px;
    margin: 1rem;
    background-image: url('https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1');
    background-size: cover;
    border-radius: 3px;
    `
    
    const UserInfo = styled.div`
    width: 70%;
    height: 10rem;
    padding: 1rem;
    color: #FFF;
    margin: 1rem;
    margin-right: auto;
    
    h2, h3 {
        margin: 1rem;
        font-size: 1.25rem;
        letter-spacing: 0.15rem;
    }
    
    .points {
        color: #28C96C;
        margin-left: 1.5rem;
    }
    
    i {
        font-size: 1rem;
    }
`
    
const Navigation = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const NavButton = styled.div`
        width: 90%;
        height: 5rem;
        margin: 1rem 0;
        padding: 1rem;
        font-size: 1.5rem;
        color: #FFF;
        display: flex;
        flex-flow: row nowrap;
        justify-content: left;
        align-items: center;
        border-radius: 2px;
     

            i {
                margin: 2rem 3rem 2rem 1rem;
                font-size: 2rem;
            }

            &:hover {
                background-color: #3A3699;
                box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1)
            }
`

const Darken = styled.div`

`

// EXPORT
export default MobileMenu;