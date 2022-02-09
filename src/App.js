import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employee-list" element={<Employees />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
