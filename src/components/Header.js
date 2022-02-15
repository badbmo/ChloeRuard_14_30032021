import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../style/header.css";

/**
 * Header Component with Nav
 * @returns {JSX} React component
 */

function Header() {
	return (
		<header className="header">
			<Link className="header__link" to="/">
				<img className="header__logo" src={Logo} alt="Logo de Wealth Health" />
				<h1 className="header__title">HRnet</h1>
			</Link>
			<nav className="nav">
				<NavLink end className="nav__option" to="/">
					Home
				</NavLink>
				<NavLink end className="nav__option" to="/employee-list">
					View Current Employees
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
