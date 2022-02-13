import React from "react";
import "../style/search.css";

/**
 * Search component
 * @returns {JSX} React component
 */

function Search({value, setQuery}) {
	return (
			<div className="search">
				<label className="search__label">Search :</label>
				<input type="search" className="search__input" placeholder="Looking for something ?" value={value} onChange={(e) => setQuery(e.target.value)}/>
			</div>
	);
}

export default Search;
