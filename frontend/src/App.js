import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import ShowData from "./pages/ShowData";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/data" element={<Data />} />
				<Route path="/showdata" element={<ShowData />} />
			</Routes>
		</>
	);
}

export default App;
