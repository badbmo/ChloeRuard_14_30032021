import React from "react";
import "../style/table.css";
import { useState } from "react";
import Search from "./Search";
import Entries from "./Entries";
import Pagination from "./Pagination";
import { tableHeadData } from "../utils/const/tableHeadData";
import { bodyData } from "../utils/const/mockedData";
import { entriesValue } from "../utils/const/entriesValue";
import useSortData from "../utils/hooks/useSortData";

/**
 * Table Component to display current employees
 * @returns {JSX} React component
 */

function Table() {
	const [itemsperpage, setItemsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [query, setQuery] = useState("");

	//to avoid problem like: we are on current page 3/3 and number of page change to 1 (we stay on page 3/1)
	const resetCurrentPage = () => {
		setCurrentPage(1);
	};

	const getDirection = (headCell) => {
		if (sortedField === null) {
			return " sorting";
		}
		return headCell === sortedField.name ? " sorting-" + sortedField.direction : " sorting";
	};

	//filter totalData (array of object), Object.keys(object) get all the keys of one object as an array, k as keys string to iterate on object: object["firstName"], object["lastName"] ...
	const filteredData = bodyData.filter((object) => {
		return Object.keys(object).some((k) => object[k].toLowerCase().includes(query.toLowerCase().trim()));
	});

	const { data, requestSort, sortedField } = useSortData(filteredData);

	const filteredDataLength = filteredData.length;
	const originalDataLength = bodyData.length;
	const startItem = (currentPage - 1) * itemsperpage;
	const endItem = currentPage * itemsperpage;

	const displayedData = data.slice(startItem, endItem);
	const displayedDataLength = displayedData.length;
	const firstDisplayedData = filteredDataLength === 0 ? 0 : startItem + 1;
	const lastDisplayedData = data.indexOf(displayedData[displayedDataLength - 1]) + 1;

	const tableHead = (list) => {
		return list.map((item, index) => (
			<th className={"head__cell cell-" + index + getDirection(item.id)} key={index} onClick={() => requestSort(item.id)}>
				{item.name}
			</th>
		));
	};

	const tableBody = (data) => {
		if (originalDataLength === 0) {
			return (
				<tr className="error__noData table__row">
					<td className="row__cell" colspan="9">
						You are a company with no employee
					</td>
				</tr>
			);
		}
		if (filteredDataLength === 0) {
			return (
				<tr className="error__noData table__row">
					<td className="row__cell" colspan="9">
						No match found, sorry !
					</td>
				</tr>
			);
		}

		//filter data (array of object), Object.values(object) get all the values of one object as an array, v as key to iterate on object: "value 1", "value 2" ...
		return data.map((item, index) => (
			<tr key={index} className="table__row">
				{Object.values(item).map((v) => (
					<td key={v} className="row__cell">
						{v}
					</td>
				))}
			</tr>
		));
	};

	return (
		<main className="main__table">
			<h2 className="table__title">Current Employees</h2>
			<section className="topSection__table">
				<div className="entry">
					<Entries
						label="Show"
						name="entries"
						value={itemsperpage}
						list={entriesValue}
						setInput={setItemsPerPage}
						actionOnChange={resetCurrentPage}
					/>
				</div>
				<Search value={query} setQuery={setQuery} actionOnChange={resetCurrentPage}/>
			</section>
			<table className="table">
				<thead>
					<tr className="table__head">{tableHead(tableHeadData)}</tr>
				</thead>
				<tbody>{tableBody(displayedData)}</tbody>
			</table>
			<section className="bottomSection__table">
				<div>
					Showing {firstDisplayedData} to {lastDisplayedData} of {filteredDataLength} entries
				</div>
				<Pagination
					dataLength={filteredDataLength}
					pageSize={itemsperpage}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</section>
		</main>
	);
}

export default Table;
