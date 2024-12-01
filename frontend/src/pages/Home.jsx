import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
function Home() {
	return (
		<>
			<Nav></Nav>
			<div className="content">
				<h2>Home Page</h2>
				<p>Welcome to the home page!</p>
			</div>
		</>
	);
}

export default Home;
