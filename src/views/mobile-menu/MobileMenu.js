// IMPORTS
// react
import React, { useState, useEffect } from 'react';
// router
import { Link } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins'
import waves from "../../images/Onboarding/waves.svg";
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
const MobileMenu = props => {
    // state hooks
    const [menu, setMenu] = useState({
        status: 'closed',
        darken: 'inactive'
    });

    // use effect
    useEffect(() => {
        setMenu({ ...menu, status: 'closed', darken: 'inactive' })
    }, [props.location])

    // handlers
    const menuToggle = () => {
        menu.status === 'closed' ?
        setMenu({ ...menu, status: 'open', darken: 'active' }) :
        setMenu({ ...menu, status: 'closed', darken: 'inactive' })
    };

    // RENDER
    return (
        <Wrapper>
            <Darken className={menu.darken} onClick={menuToggle}></Darken>
            <DrawerContainer>
                <Drawer className={menu.status}>
                    <Column>
                    <UserHud>
                        <Link to='/profile-overview'><Avatar></Avatar></Link>

                        <UserInfo>
                            <h2>{dummyUser.first_name} {dummyUser.last_name}</h2>
                            <h2>{dummyUser.cohort} - {dummyUser.section_lead}</h2>
                            <h3 className='points'><i className="fas fa-piggy-bank"></i> {dummyUser.points} Points</h3>
                        </UserInfo>
                    </UserHud>

                    <Navigation>
                        <NavButton><Link to='/dashboard'><i className="fas fa-home"></i>Home</Link></NavButton>
                        <NavButton><Link to='/leaderboard'><i className="fas fa-gamepad"></i>Leaderboard</Link></NavButton>
                        <NavButton><Link to='/team-view'><i className="fas fa-users"></i>Team</Link></NavButton>
                        <NavButton><Link to='/coming-soon'><i className="fas fa-calendar-alt"></i>Weekly Challenge</Link></NavButton>
                        <NavButton><Link to='/coming-soon'><i className="fas fa-stopwatch"></i>Pomodoro Clock</Link></NavButton>
                        <NavButton><Link to='/coming-soon'><i className="fas fa-gem"></i>Rewards</Link></NavButton>
                    </Navigation>
                    </Column>
                </Drawer>
            </DrawerContainer>
            <PlaceholderButton onClick={menuToggle}><i className="fas fa-bars"></i></PlaceholderButton>
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
        background-image: url(${waves});
        background-color: #4742bc;
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
    color: #CCC9FF;
    font-size: 2rem;
    margin: 2rem auto 2rem 2rem;
`

const DrawerContainer = styled.div`
    height: 90vh;
    position: fixed;
    z-index: -3;
    .closed {
        width: 90vw;
        height: 100vh;
        position: fixed;
        right: 100vw;
        background-color: #4742bc;
        transition: 0.3s ease-in-out;
    }
        .open {
            background-color: #3D3B91;
            transition: 0.5s ease-in-out;
        }
`

const Drawer = styled.div`
    position: relative;
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
        color: #CCC9FF;
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
               
            }
`

const Darken = styled.div`
`

// EXPORT
export default MobileMenu;