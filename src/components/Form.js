import React from "react";
import "../style/form.css";
import { departmentList } from "../utils/const/departmentList";
import { stateList } from "../utils/const/stateList";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Modal from "./Modal";
import { useState, useContext } from "react";
import { DataContext } from "../utils/context/dataContext";

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
	const [stateLong, setStateLong] = useState(stateList[0].name);
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState(departmentList[0].name);
	const [modal, setModal] = useState(false);

	const { addData } = useContext(DataContext);

	const getStateAbbreviation = (stateLong) => {
		const selectedState = stateList.find((element) => element.name === stateLong);
		return selectedState.abbreviation;
	};

	const state = getStateAbbreviation(stateLong);

	//the order here is important !
	const employee = { firstName, lastName, startDate, department, birthDate, street, city, state, zipCode };

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Employee Created!", employee);
		handleModal();
		refreshForm();
		addData(employee);
	};

	const handleModal = () => {
		setModal(!modal);
	};

	const refreshForm = () => {
		setFirstName("");
		setLastName("");
		setBirthDate("");
		setStartDate("");
		setStreet("");
		setCity("");
		setStateLong(stateList[0].name);
		setZipCode("");
		setDepartment(departmentList[0].name);
	};

	return (
		<main className="main__form">
			<h2 className="form__title">Create Employee</h2>

			<form className="form__employee" onSubmit={handleSubmit}>
				<Input
					label="First Name"
					id="first-name"
					type="text"
					value={firstName}
					setInput={setFirstName}
					pattern={"^[A-Za-z ]+$"}
				/>
				<Input
					label="Last Name"
					id="last-name"
					type="text"
					value={lastName}
					setInput={setLastName}
					pattern={"^[A-Za-z ]+$"}
				/>
				<Input label="Date of Birth" id="date-of-birth" type="text" value={birthDate} setInput={setBirthDate} />
				<Input label="Start Date" id="start-date" type="text" value={startDate} setInput={setStartDate} />

				<fieldset className="form__address">
					<legend className="address__legend">Address</legend>

					<Input label="Street" id="street" type="text" value={street} setInput={setStreet} pattern={"^[A-Za-z0-9 ]+$"} />
					<Input label="City" id="city" type="text" value={city} setInput={setCity} pattern={"^[A-Za-z ]+$"} />

					<Dropdown label="State" name="state" list={stateList} value={stateLong} setInput={setStateLong} />

					<Input label="Zip Code" id="zip-code" type="number" value={zipCode} setInput={setZipCode} />
				</fieldset>

				<Dropdown label="Department" name="department" list={departmentList} value={department} setInput={setDepartment} />

				<button className="form__button">Save</button>
			</form>
			{modal ? <Modal text="Employee created !" handleModal={handleModal} /> : ""}
		</main>
	);
}

export default Form;
