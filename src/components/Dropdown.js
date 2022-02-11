import React from "react";

/**
 * Dropdown Component for form
 * @param {string} label name of label
 * @param {string} name name of select and htmlFor of label
 * @param {Object[]} list array of objects
 * @param {function} setInput function to get what is put in input
 * @param {string} value value of what is put in input

 * @returns {JSX} React component
 */

function Dropdown({ label, name, list, value, setInput }) {
	const createOptionsState = () => {
		return list.map((item, index) => {
			return <option key={index}>{item.name}</option>;
		});
	};

	return (
		<React.Fragment>
			<label htmlFor={name}>{label}</label>
			<select id={name} name={name} value={value} onChange={(e) => setInput(e.target.value)}>
				{createOptionsState()}
			</select>
		</React.Fragment>
	);
}

export default Dropdown;
