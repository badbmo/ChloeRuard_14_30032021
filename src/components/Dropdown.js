import React from "react";

/**
 * Dropdown Component for form
 * @param {string} label Name of label
 * @param {string} name name of select and htmlFor of label
 * @param {Object[]} list array of objects
 * @returns {JSX} React component
 */

function Dropdown({label, name, list}) {

	const createOptionsState = () => {
		return list.map((item, index) => {
			return <option key={index}>{item.name}</option>;
		});
	};

	return (
		<React.Fragment>
			<label htmlFor={name}>{label}</label>
			<select name={name}>
				{createOptionsState()}
			</select>
		</React.Fragment>
	);
}

export default Dropdown;
