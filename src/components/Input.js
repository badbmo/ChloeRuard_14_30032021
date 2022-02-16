import React from "react";

/**
 * Input Component for form
 * @param {string} label name of label
 * @param {string} id name of select and htmlFor of label
 * @param {string} type type of input
 * @param {function} setInput function to get what is put in input
 * @param {string} value value of what is put in input
 * @returns {JSX} React component
 */

function Input({ label, id, type, value, setInput }) {
	return (
		<React.Fragment>
			<label htmlFor={id}>{label}</label>
			<input id={id} type={type} value={value} onChange={(e) => setInput(e.target.value)} />
		</React.Fragment>
	);
}

export default Input;
