import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//images
import user from "./AdminNavImages/bxs-group.svg";
import LeaderBoardImage from './AdminNavImages/bxs-medal.svg'
import LogoutImage from './AdminNavImages/bx-exit.svg'

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
				<NavLink to="/leaderboard">
					<img className="leaderboardimg"  src={LeaderBoardImage} alt="leaderboard"/>
				</NavLink>
				<NavLink className='text-link' to="/leaderboard">
					<header className="header leaderboard">Leaderboard</header>
				</NavLink>
				</div>

				<div className="iconcontainer">
				<NavLink to="/users">
					<img className="usersimg" src={user} alt="user" />
				</NavLink>
				<NavLink to="/users">
					<header className="header user">Users</header>
				</NavLink>
				</div>
				</div>

				<div className="logoutcontainer">
				<NavLink to="/">
					<img
						className="logoutimage"
						src={LogoutImage}
						alt="logout"
						onClick={logoutClick}
					/>
				</NavLink>
				<NavLink to="/">
					<header className=" header logoutheader">Logout</header>
				</NavLink>
				</div>
			</div>
			<div>{props.children}</div>
		</div>
	);
}

export default WithNavigation;
