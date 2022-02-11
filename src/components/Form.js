import React from "react";
import "../style/form.css";
import { departmentList } from "../utils/const/departmentList";
import { stateList } from "../utils/const/stateList";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Modal from "./Modal";
import { useState } from "react";

/**
 * Form Component to create employee
 * @returns {JSX} React component
 */

function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [startDate, setStartDate] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState(stateList[0].name);
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState(departmentList[0].name);
	const [modal, setModal] = useState(false);

	const employee = { firstName, lastName, birthDate, startDate, street, city, state, zipCode, department };

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Employee Created!", employee);
		handleModal();
	};

	const handleModal = () => {
		setModal(!modal);
	};

	return (

		<main className="main__form">
			<h2 className="form__title">Create Employee</h2>

			<form className="form__employee" onSubmit={handleSubmit}>
				<Input label="First Name" id="first-name" type="text" value={firstName} setInput={setFirstName} />
				<Input label="Last Name" id="last-name" type="text" value={lastName} setInput={setLastName} />
				<Input label="Date of Birth" id="date-of-birth" type="text" value={birthDate} setInput={setBirthDate} />
				<Input label="Start Date" id="start-date" type="text" value={startDate} setInput={setStartDate} />

				<fieldset className="form__address">
					<legend className="address__legend">Address</legend>

					<Input label="Street" id="street" type="text" value={street} setInput={setStreet} />
					<Input label="City" id="city" type="text" value={city} setInput={setCity} />

					<Dropdown label="State" name="state" list={stateList} value={state} setInput={setState} />

					<Input label="Zip Code" id="zip-code" type="number" value={zipCode} setInput={setZipCode} />
				</fieldset>

				<Dropdown label="Department" name="department" list={departmentList} value={department} setInput={setDepartment} />

				<button className="form__button">Save</button>
			</form>
			{modal ? <Modal text="Employee created !" handleModal={handleModal}/> : ""}
		</main>
	);
}

export default Form;
