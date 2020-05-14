import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//images
import user from "./AdminNavImages/user.png";
import logout from "./AdminNavImages/signout 1.png";
import LeaderBoardImage from './AdminNavImages/list-ol-solid.png'

export const NavBar = styled.div`
	position: fixed;
	background-color: rgb(61, 162, 237);
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
		max-width: 30px;
		max-height: 30px;
		margin-left: 7.5px;
		margin-right:15px;
		
	}
	.starsDiv {
		width: auto;
		height: auto;
	}
	&:hover{
		background-color:black;
		width: 150px;
		align-items:flex-end;
		transition: 0.5s ease-in-out;
		
	}
	&:not(:hover){
		transition: 0.5s;
		align-items:flex-end;
	}
`;



export const Content = styled.div`
	background-color: white;
`;

export const Leaderboard = styled.img`
filter: invert(1);
`;

export const Users = styled.img``;


export const Logout = styled.img`
	margin-bottom: 2vh;
`;
const activeClassName = "active";
const StyledNavLink = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
	&.${activeClassName} .img {
		opacity: 100%;
	}
`;
export const Space = styled.div``;

export const Blank = styled.div`
margin-bottom: 35vh;
`;
/* const clear = {localStorage.clear} */

function WithNavigation(props) {
	function logoutClick() {
		localStorage.clear();
	}
	return (
		<div>
			<NavBar classname= 'nav-bar'>
				<Space>
				
				</Space>
				<Space></Space>
				<StyledNavLink to="/leaderboard">
					<Leaderboard className="img" src={LeaderBoardImage} alt="leaderboard"/>
				</StyledNavLink>
				<StyledNavLink to="/users">
					<Users className="img" src={user} alt="user" />
				</StyledNavLink>
				<Space>
                    <div>
                        <Blank></Blank>
                    </div>
                </Space>
				<StyledNavLink to="/">
					<Logout
						className="img"
						src={logout}
						alt="logout"
						onClick={logoutClick}
					/>
				</StyledNavLink>
			</NavBar>
			<Content>{props.children}</Content>
		</div>
	);
}

export default WithNavigation;
