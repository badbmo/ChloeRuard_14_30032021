import React from "react";
import { Link } from "react-router-dom";
import "../style/error.css";

/**
 * Error Page
 * @returns {JSX} React component
 */

function Error() {
	return (
		<main className="error">
			<div className="error__container">
				<h1 className="error__title">404</h1>
				<p className="error__info">Oops! This page doesn't exist :( </p>
				<Link className="error__link" to="/">
					Go back to home page
				</Link>
			</div>
		</main>
	);
}

export default Error;
