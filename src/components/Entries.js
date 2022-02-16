import React from "react";

/**
 * Entries Component for form
 * @param {string} label name of label
 * @param {string} name name of select and htmlFor of label
 * @param {Object[]} list array of objects
 * @param {function} setInput function to get what is put in input
 * @param {function} actionOnChange additional function to use onChange
 * @param {string} value value of what is put in input

 * @returns {JSX} React component
 */

function Entries({ label, name, list, value, setInput, actionOnChange }) {
	const createOptionsState = () => {
		return list.map((item, index) => {
			return <option key={index}>{item.name}</option>;
		});
	};

	return (
		<React.Fragment>
			<label htmlFor={name}>{label}</label>
			<select
				id={name}
				name={name}
				value={value}
				onChange={(e) => {
					setInput(parseInt(e.target.value));
					actionOnChange();
				}}
			>
				{createOptionsState()}
			</select>
			entries
		</React.Fragment>
	);
}

export default Entries;
