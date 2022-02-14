import React from "react";
import "../style/table.css";
import { useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import { tableHeadData } from "../utils/const/tableHeadData";
import { bodyData } from "../utils/const/mockedData";
import { entriesValue } from "../utils/const/entriesValue";

/**
 * Table Component to display current employees
 * @returns {JSX} React component
 */

function Table() {
	const [itemsperpage, setItemsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [query, setQuery] = useState("");

	//filter totalData (array of object)
	//Object.keys(object) get all the keys of one object as an array
	//k as keys string to iterate on object: object["firstName"], object["lastName"] ...
	const sortedData = bodyData.filter((object) => {
		console.log(object["firstName"]);
		return Object.keys(object).some((k) => object[k].toLowerCase().includes(query.toLowerCase().trim()));
	});
	const sortedDataLength = sortedData.length;
	const totalDataLength = bodyData.length;
	const startItem = (currentPage - 1) * itemsperpage;
	const endItem = currentPage * itemsperpage;
	const displayedData = sortedData.slice(startItem, endItem);
	const displayedDataLength = displayedData.length;
	const firstDisplayedData = sortedDataLength === 0 ? 0 : startItem + 1;
	const lastDisplayedData = sortedData.indexOf(displayedData[displayedDataLength - 1]) + 1;

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
		if (totalDataLength === 0) {
			return <div className="error__noData">You are a company with no employee</div>;
		}
		if (sortedDataLength === 0) {
			return <div className="error__noData">No match found, sorry !</div>;
		}
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

	return (
		<main className="main__table">
			<h2 className="table__title">Current Employees</h2>
			<section className="topSection__table">
				<div className="entry">
					<Dropdown label="Show" name="entries" value={itemsperpage} list={entriesValue} setInput={setItemsPerPage} />
					entries
				</div>
				<Search value={query} setQuery={setQuery} />
			</section>
			<table className="table">
				<thead>
					<tr className="table__head">{tableHead(tableHeadData)}</tr>
				</thead>
				<tbody>{tableBody(displayedData)}</tbody>
			</table>
			<section className="bottomSection__table">
				<div>
					Showing {firstDisplayedData} to {lastDisplayedData} of {sortedDataLength} entries
				</div>
				<Pagination
					dataLength={sortedDataLength}
					pageSize={itemsperpage}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</section>
		</main>
	);
}

export default Table;
