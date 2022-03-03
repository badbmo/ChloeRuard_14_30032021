import "./style/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { DataProvider } from "./utils/context/dataContext";

function App() {
	return (
		<DataProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/employee-list" element={<Employees />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</Router>
		</DataProvider>
	);
}

export default App;
