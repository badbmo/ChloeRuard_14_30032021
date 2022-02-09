import React from "react";
import "../style/form.css";
import { departmentList } from "../utils/const/departmentList";
import { stateList } from "../utils/const/stateList";
import Dropdown from "./Dropdown";
import Input from "./Input";

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

				<Input label="First Name" id="first-name" type="text"/>
				<Input label="Last Name" id="last-name" type="text"/>
				<Input label="Date of Birth" id="date-of-birth" type="text"/>
				<Input label="Start Date" id="start-date" type="text"/>

				<fieldset className="form__address">
					<legend className="address__legend">Address</legend>

					<Input label="Street" id="street" type="text"/>
					<Input label="City" id="city" type="text"/>

					<Dropdown label="State" name="state" list={stateList}/>
					
					<Input label="Zip Code" id="zip-code" type="number"/>

				</fieldset>

				<Dropdown label="Department" name="department" list={departmentList}/>

				<button className="form__button">Save</button>
			</form>
		</main>
	);
}

export default Form;
