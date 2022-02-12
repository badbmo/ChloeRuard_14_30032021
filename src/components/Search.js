import React from "react";
import "../style/search.css";

/**
 * Search component
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
