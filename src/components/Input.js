import React from "react";

/**
 * Dropdown Component for form
 * @param {string} label name of label
 * @param {string} id name of select and htmlFor of label
 * @param {string} type type of input
 * @returns {JSX} React component
 */

function Input({ label, id, type }) {
	return (
		<React.Fragment>
			<label htmlFor={id}>{label}</label>
			<input id={id} type={type} />
		</React.Fragment>
	);
}

export default Input;
