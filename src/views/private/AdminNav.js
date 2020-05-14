import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//images
import user from "./AdminNavImages/user.png";
import logout from "./AdminNavImages/signout 1.png";
import LeaderBoardImage from './AdminNavImages/list-ol-solid.png'
import LogoutImage from './AdminNavImages/sign-out-alt-solid.png'


export const Content = styled.div`
	background-color: white;
`;
const activeClassName = "active";
const StyledNavLink = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
	&.${activeClassName} .img {
		opacity: 100%;
	}
`;




/* const clear = {localStorage.clear} */

function WithNavigation(props) {
	function logoutClick() {
		localStorage.clear();
	}
	return (
		<div>
			<div className="navBar">
				<br/>
				
				<div>
				<div className="iconcontainer">
				<header className="header leaderboard">Leaderboard</header>
				<StyledNavLink to="/leaderboard">
					<img className="leaderboardimg"  src={LeaderBoardImage} alt="leaderboard"/>
				</StyledNavLink>
				
				</div>
				<div className="iconcontainer">
				<header className="header user">Users</header>
				<StyledNavLink to="/users">
					<img className="users" src={user} alt="user" />
				</StyledNavLink>
				
				</div>
				</div>
				<div className="logoutcontainer">
				<header className=" header logoutheader">Logout</header>
				<StyledNavLink to="/">
					<img
						className="logoutimage"
						src={LogoutImage}
						alt="logout"
						onClick={logoutClick}
					/>
				</StyledNavLink>
				</div>
			</div>
			<Content>{props.children}</Content>
		</div>
	);
}

export default WithNavigation;
