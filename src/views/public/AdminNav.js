import React from 'react';
import styled from 'styled-components';


export const NavBar = styled.div`      
    background-color: blue;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100vh;
    justify-content: space-between;
    
`;


export const Content = styled.div`
    background-color: white;
`;

export const Stars = styled.image`
    // oijofjiwifj

`;

export const Leaderboard = styled.image`
    // oijofjiwifj

`;

export const Users = styled.image`
    // oijofjiwifj

`;


export const Settings = styled.image`
    // oijofjiwifj

`;


export const Logout = styled.image`
    // oijofjiwifj

`;

function WithNavigation (props) {
    return <div>
        <NavBar>
            <Stars>
                STAR IMAGE HERE
            </Stars>
            <Leaderboard>
                LEADERBOARD
            </Leaderboard>
            <Users>
                USERS
            </Users>
            <Settings>
                Settings
            </Settings>
            <Logout>
                logout
            </Logout>
        </NavBar>
        <Content>
            {
                props.children
            }
        </Content>
    </div>;
}

export default WithNavigation;