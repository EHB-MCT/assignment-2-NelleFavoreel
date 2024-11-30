import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import Data from "./pages/Data";
import ShowData from "./pages/ShowData";
import Home from "./pages/Home";

function Router() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/data" element={<Data />} />
				<Route path="/ShowData" element={<ShowData />} />
			</Routes>
		</Router>
	);
}

export default Router;
