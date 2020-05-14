import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//images
import user from "./AdminNavImages/user.png";
import logout from "./AdminNavImages/signout 1.png";
import LeaderBoardImage from './AdminNavImages/list-ol-solid.png'




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
				
				<StyledNavLink to="/leaderboard">
					<img className="leaderboardimg"  src={LeaderBoardImage} alt="leaderboard"/>
				</StyledNavLink>
				<header className="header leaderboard">Leaderboard</header>
				</div>
				<div className="iconcontainer">
				
				<StyledNavLink to="/users">
					<img className="users" src={user} alt="user" />
				</StyledNavLink>
				<header className="header user">Users</header>
				</div>
				</div>
			
				<StyledNavLink to="/">
					<img
						className="img"
						src={logout}
						alt="logout"
						onClick={logoutClick}
					/>
				</StyledNavLink>
			</div>
			<Content>{props.children}</Content>
		</div>
	);
}

export default WithNavigation;
