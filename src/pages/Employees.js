import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";

/**
 * Employees Page to display employees list
 * @returns {JSX} React component
 */

function Employees() {
	return (
		<React.Fragment>
			<Header />
			<Table />
		</React.Fragment>
	);
}

export default Employees;
