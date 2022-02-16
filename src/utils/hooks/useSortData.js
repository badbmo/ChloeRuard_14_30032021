import { useState, useMemo } from "react";

/**
 * Custom hook to sort Data from table
 * @param {string} data data to sort
 * @param {string} config to choose a sorting by default, set by default to null
 * @returns {object} data, requestSort, sortedField
 */

export default function useSortData(data, config = null) {
	const [sortedField, setSortedField] = useState(config);
	console.log(sortedField);

	const sortedItems = useMemo(() => {
		let sortableItems = [...data];
		if (sortedField !== null) {
			sortableItems.sort((a, b) => {
				// if (sortedField.name === "zipCode") {
				// 	return sortedField.direction === "ascending"
				// 		? a[sortedField.name] - b[sortedField.name]
				// 		: b[sortedField.name] - a[sortedField.name];
				// }
				// if (sortedField.name === "startDate" || "birthDate") {
				// 	return sortedField.direction === "ascending"
				// 		? new Date(a[sortedField.name]) - new Date(b[sortedField.name])
				// 		: new Date(b[sortedField.name]) - new Date(a[sortedField.name]);
				// }
				if (a[sortedField.name].toLowerCase().trim() < b[sortedField.name].toLowerCase().trim()) {
					return sortedField.direction === "ascending" ? -1 : 1;
				}
				if (a[sortedField.name].toLowerCase().trim() > b[sortedField.name].toLowerCase().trim()) {
					return sortedField.direction === "ascending" ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [data, sortedField]);

	const requestSort = (headCellClicked) => {
		let direction = "ascending";
		if (sortedField && sortedField.name === headCellClicked && sortedField.direction === "ascending") {
			direction = "descending";
		}
		setSortedField({ name: headCellClicked, direction });
	};

	return { sortedData: sortedItems, requestSort, sortedField };
}
