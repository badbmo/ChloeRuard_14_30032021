import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [originalData, setData] = useState([]);
	const addData = (newItem) => {
		const updatedData = [...originalData, newItem];
		setData(updatedData);
	};

	return <DataContext.Provider value={{ originalData, addData }}>{children}</DataContext.Provider>;
};
