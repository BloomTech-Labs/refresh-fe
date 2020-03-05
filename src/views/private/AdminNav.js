import React from 'react';
import styled from 'styled-components';

//images
import logo from './AdminNavImages/logo.png';
import leaderboard from './AdminNavImages/leaderboard.png';
import user from './AdminNavImages/user.png';
import settings from './AdminNavImages/settings.png';
import logout from './AdminNavImages/signout 1.png';

export const NavBar = styled.div`      
    background-color: rgb(61,162,237);
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 10vh;
    height: 100vh;
    justify-content: space-between;
    .img {
        display: flex;
        justify-content: space-between;
        opacity: 70%; 
        width:  5vh;
        height: 5vh;
        margin-left: 2.5vh;

        &:hover {
        opacity: 100%; 
      }
    }
    
`;


export const Content = styled.div`
    background-color: white;
`;

 export const Stars = styled.img`
    margin-top: 2vh;
    margin-bottom: 15vh;
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

function WithNavigation (props) {
    return <div>
        <NavBar>
            <Stars className='img' src={logo} alt='stars'/>
            <div></div>
            <Leaderboard className='img'src={leaderboard} alt='leaderboard'/>
            <Users className='img' src={user} alt='user'/>
            <Settings className='img' src={settings} alt='settings'/>
            <div></div>
            <Logout className='img' src={logout} alt='logout'/>
        </NavBar>
        <Content>
            {
                props.children
            }
        </Content>
    </div>;
}

export default WithNavigation;