import React from "react";
import "../style/form.css";
import { departmentList } from "../utils/const/departmentList";
import { stateList } from "../utils/const/stateList";
import Dropdown from "./Dropdown";

/**
 * Form Component to create employee
 * @returns {JSX} React component
 */

function Form() {

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Employee Created!");
	};

	return (
		<main className="main__form">
			<h2 className="form__title">Create Employee</h2>
			<form className="form__employee" onSubmit={handleSubmit}>
				<label htmlFor="first-name">First Name</label>
				<input type="text" id="first-name" />

				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name" />

				<label htmlFor="date-of-birth">Date of Birth</label>
				<input id="date-of-birth" type="text" />

				<label htmlFor="start-date">Start Date</label>
				<input id="start-date" type="text" />

				<fieldset className="form__address">
					<legend className="address__legend">Address</legend>

					<label htmlFor="street">Street</label>
					<input id="street" type="text" />

					<label htmlFor="city">City</label>
					<input id="city" type="text" />

					<Dropdown label="State" name="state" list={stateList}/>

					<label htmlFor="zip-code">Zip Code</label>
					<input id="zip-code" type="number" />
				</fieldset>

				<Dropdown label="Department" name="department" list={departmentList}/>

				<button className="form__button">Save</button>
			</form>
		</main>
	);
}

export default Form;
