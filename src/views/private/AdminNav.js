import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

//images
import logo from './AdminNavImages/logo.png';
import leaderboard from './AdminNavImages/leaderboard.png';
import user from './AdminNavImages/user.png';
import settings from './AdminNavImages/settings.png';
import logout from './AdminNavImages/signout 1.png';

export const NavBar = styled.div`
    position: fixed;    
    background-color: rgb(61,162,237);
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 100vh;
    justify-content: space-between;
    .img {
        display: flex;
        text-align: center;
        justify-content: space-between;
        opacity: 70%; 
        max-width:  30px;
        max-height: 30px;
        margin-left: 7.5px;
    }
    .starsDiv {
        width: auto;
        height: auto;
    } 
  
`;


export const Content = styled.div`
    background-color: white;
`;

 export const Stars = styled.img`
    width: auto;
    height: auto;
    margin-top: 2vh;
    margin-bottom: 15vh;
    &:hover {
        cursor: normal;
      } 
 `;


export const Leaderboard = styled.img`

`;

export const Users = styled.img`

`;


export const Settings = styled.img`

`;


export const Logout = styled.img`
    margin-top: 35vh;
    margin-bottom: 2vh;
`;

export const Space = styled.div `
    cursor: normal;
`;

      


// const clear = {localStorage.clear}

function WithNavigation (props) {

    function logoutClick() {
        localStorage.clear();
      }
    return <div>
        <NavBar>
            <Link to="/">
                <div classname='starsDiv'>
                <Stars className='img'/>
                </div>
            </Link>
            <Space></Space>
            <Link to="/">
                <Leaderboard className='img'src={leaderboard} alt='leaderboard'/>
            </Link>
            <Link to="/users">
                <Users className='img' src={user} alt='user'/>
            </Link>
            <Link to="/">
                <Settings className='img' src={settings} alt='settings'/>
            </Link>
            <Space></Space>
            <Link to="/">
                <Logout className='img' src={logout} alt='logout'  onClick={logoutClick}/>
            </Link>
        </NavBar>
        <Content>
            {
                props.children
            }
        </Content>
    </div>;
}

export default WithNavigation;