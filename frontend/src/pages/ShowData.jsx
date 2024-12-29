import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Human from "../components/Human";
import ExplenationText from "../components/ExplenationText";
import ExplenationText2 from "../components/ExplenationText2";
import EndText from "../components/EndText";

function ShowData() {
	return (
		<div>
			<h2>Showdata Page</h2>
			<p>Welcome to the home page!</p>
			<Human></Human>
			<ExplenationText></ExplenationText>
			<ExplenationText2></ExplenationText2>
			<EndText></EndText>
		</div>
	);
}

export default ShowData;
