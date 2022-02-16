import React from "react";
import "../style/search.css";

/**
 * Search component
 * @param {number} value value of what is put in input
 * @param {function} setQuery function to get what is put in input
 * @param {function} actionOnChange additional function to use onChange

 * @returns {JSX} React component
 */

function Search({ value, setQuery, actionOnChange }) {
	return (
		<div className="search">
			<label className="search__label">Search :</label>
			<input
				type="search"
				className="search__input"
				placeholder="Looking for something ?"
				value={value}
				onChange={(e) => {
					setQuery(e.target.value);
					actionOnChange();
				}}
			/>
		</div>
	);
}

export default Search;
