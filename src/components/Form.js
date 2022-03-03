import React from "react";
import "../style/form.css";
import { departmentList } from "../utils/const/departmentList";
import { stateList } from "../utils/const/stateList";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Modal from "./Modal";
import { useState, useContext } from "react";
import { DataContext } from "../utils/context/dataContext";
import DatePicker from "datepicker-react-by-badbmo";

/**
 * Form Component to create employee
 * @returns {JSX} React component
 */

function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [stateLong, setStateLong] = useState(stateList[0].name);
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState(departmentList[0].name);
	const [modal, setModal] = useState(false);

	const today = new Date();
	const [startDateDateFormat, setStartDate] = useState(today);
	const [birthDateDateFormat, setBirthDate] = useState(today);

	const { addData } = useContext(DataContext);

	const getStateAbbreviation = (stateLong) => {
		const selectedState = stateList.find((element) => element.name === stateLong);
		return selectedState.abbreviation;
	};

	const state = getStateAbbreviation(stateLong);
	const startDate = new Date(startDateDateFormat).toLocaleDateString();
	const birthDate = new Date(birthDateDateFormat).toLocaleDateString();
	const id = Date.now().toString();

	const handleSubmit = (e) => {
		e.preventDefault();
		//the order here is important ! The name is also important as employee object is used in Table
		const employee = { firstName, lastName, startDate, department, birthDate, street, city, state, zipCode, id };
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
		setStreet("");
		setCity("");
		setStateLong(stateList[0].name);
		setZipCode("");
		setDepartment(departmentList[0].name);
		// we do not set birthDate and startDate on today: we can't change the value of input, so values would be !=
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
				<DatePicker idInput="date-of-birth" nameOfLabel="Date of Birth" getSelectedDate={setBirthDate} />
				<DatePicker idInput="start-date" nameOfLabel="Start Date" getSelectedDate={setStartDate} />

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
