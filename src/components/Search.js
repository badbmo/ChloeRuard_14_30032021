import React from "react";
import "../style/search.css";

/**
 * Employees Page to display employees list
 * @returns {JSX} React component
 */

function Search() {
	return (
			<div className="search">
				<label className="search__label">Search :</label>
				<input type="search" className="search__input" placeholder="Looking for something ?" />
			</div>
	);
}

export default Search;
