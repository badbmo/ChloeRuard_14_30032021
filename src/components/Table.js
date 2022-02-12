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
	const [entry, setEntry] = useState(10);
	//entry = itemsperpage

	// const [sortedData, setsortedData] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const totalDataLength = bodyData.length;
	const startItem = (currentPage - 1) * entry;
	const endItem = currentPage * entry;
	const displayedData = bodyData.slice(startItem, endItem);
	const displayedDataLength = displayedData.length;
	const firstDisplayedData = startItem+1
	const lastDisplayedData = bodyData.indexOf(displayedData[displayedDataLength-1])+1;

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
				<tbody>{tableBody(displayedData)}</tbody>
			</table>
			<section className="bottomSection__table">
				<div>Showing {firstDisplayedData} to {lastDisplayedData} of {totalDataLength} entries</div>
				<Pagination dataLength={totalDataLength} pageSize={entry} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
			</section>
		</main>
	);
}

export default Table;
