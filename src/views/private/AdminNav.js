import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//images
import user from "./AdminNavImages/users.png";
// import logout from "./AdminNavImages/signout 1.png";
import LeaderBoardImage from './AdminNavImages/list-ul-regular-36.png'
import LogoutImage from './AdminNavImages/logout.png'


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
				{/* <header className="header leaderboard">Leaderboard</header> */}
				<StyledNavLink to="/leaderboard">
					<img className="leaderboardimg"  src={LeaderBoardImage} alt="leaderboard"/>
				</StyledNavLink>
				<StyledNavLink className='text-link' to="/leaderboard">
					<header className="header leaderboard">Leaderboard</header>
				</StyledNavLink>
				</div>

				<div className="iconcontainer">
				{/* <header className="header user">Users</header> */}
				<StyledNavLink to="/users">
					<img className="usersimg" src={user} alt="user" />
				</StyledNavLink>
				<StyledNavLink to="/users">
					<header className="header user">Users</header>
				</StyledNavLink>
				</div>
				</div>

				<div className="logoutcontainer">
				{/* <header className=" header logoutheader">Logout</header> */}
				<StyledNavLink to="/">
					<img
						className="logoutimage"
						src={LogoutImage}
						alt="logout"
						onClick={logoutClick}
					/>
				</StyledNavLink>
				<StyledNavLink to="/">
					<header className=" header logoutheader">Logout</header>
				</StyledNavLink>
				</div>
			</div>
			<Content>{props.children}</Content>
		</div>
	);
}

export default WithNavigation;
