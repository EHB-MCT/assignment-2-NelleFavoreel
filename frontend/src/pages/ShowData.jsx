import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Human from "../components/Human";

function ShowData() {
	return (
		<div>
			<h2>Showdata Page</h2>
			<p>Welcome to the home page!</p>
			<Human></Human>
		</div>
	);
}

export default ShowData;
