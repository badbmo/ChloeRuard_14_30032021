import React from "react";
import "../style/table.css";
import Search from "./Search";
import { tableHeadData } from "../utils/const/tableHeadData";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Pagination from "./Pagination";

/**
 * Table Component to display current employees
 * @returns {JSX} React component
 */

function Table() {
	const [entry, setEntry] = useState("");

	const tableHead = (list) => {
		return list.map((item, index) => {
			return (
				<th className={"head__cell cell-" + index} key={index}>
					{item}
				</th>
			);
		});
	};

	// const dataOrder = ["firstName", "lastName", "startDate", "department", "birthDate", "street", "city", "stateShort", ]

	const tableBody = (data) => {
		return data.map((item, index) => (
			<tr key={index} className="table__row">
				<td className="row__cell cell-0">{item.firstName}</td>
				<td className="row__cell">{item.lastName}</td>
				<td className="row__cell">{item.startDate}</td>
				<td className="row__cell">{item.department}</td>
				<td className="row__cell">{item.birthDate}</td>
				<td className="row__cell">{item.street}</td>
				<td className="row__cell">{item.city}</td>
				<td className="row__cell">{item.stateShort}</td>
				<td className="row__cell">{item.zipCode}</td>
			</tr>
		));
	};

	const bodyData = [
		{
			firstName: "chloe",
			lastName: "ruard",
			birthDate: "12/12/12",
			startDate: "01/02/03",
			street: "street",
			city: "city",
			state: "Florida",
			stateShort: "FL",
			zipCode: "3873985",
			department: "Human Resources",
		},
		{
			firstName: "chloe2",
			lastName: "ruard2",
			birthDate: "12/12/12",
			startDate: "01/02/03",
			street: "street",
			city: "city",
			state: "Florida",
			stateShort: "FL",
			zipCode: "3873985",
			department: "Human Resources",
		},
	];

	const entriesValue = [{ name: 10 }, { name: 25 }, { name: 50 }, { name: 100 }];

	return (
		<main className="main__table">
			<h2 className="table__title">Current Employees</h2>
			<section className="topSection__table">
				<div className="entry">
					<Dropdown label="Show" name="entries" value={entry} list={entriesValue} setInput={setEntry} />
					entries
				</div>
				<Search />
			</section>
			<table className="table">
				<thead>
					<tr className="table__head">{tableHead(tableHeadData)}</tr>
				</thead>
				<tbody>{tableBody(bodyData)}</tbody>
			</table>
			<section className="bottomSection__table">
				<div>Showing 1 to 2 of 2 entries</div>
				<Pagination />
			</section>
		</main>
	);
}

export default Table;
