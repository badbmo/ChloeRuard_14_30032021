import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

/**
 * Home Page to display basic info
 * @returns {JSX} React component
 */

function Home() {
	return (
		<React.Fragment>
			<Header />
				<Form />
		</React.Fragment>
	);
}

export default Home;
