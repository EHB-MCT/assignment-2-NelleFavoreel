import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registreer de noodzakelijke onderdelen van chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function EndText() {
	const [buttonData, setButtonData] = useState(null);

	useEffect(() => {
		// Haal de absolute aantallen op
		fetch("http://localhost:3001/percentage-buttons")
			.then((response) => response.json())
			.then((data) => setButtonData(data))
			.catch((error) => console.error("Error:", error));
	}, []);

	// Bereken percentage op basis van de opgehaalde data
	const totalClicks = buttonData ? buttonData["clear-button"] + buttonData["underlined-button"] + buttonData["other"] : 1;

	const chartData = buttonData
		? {
				labels: ["Clear Button", "Underlined Button", "Other"],
				datasets: [
					{
						label: "Percentage van gebruikers",
						data: [(buttonData["clear-button"] / totalClicks) * 100, (buttonData["underlined-button"] / totalClicks) * 100, (buttonData["other"] / totalClicks) * 100],
						backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
						hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
					},
				],
		  }
		: null;

	return (
		<div className="EndText">
			<div className="textContainer">
				<h1>
					{buttonData !== null
						? `Uit de test bleek dat:
					  ${Math.round((buttonData["clear-button"] / totalClicks) * 100)}% koos de "Clear Button",
					  ${Math.round((buttonData["underlined-button"] / totalClicks) * 100)}% koos de "Underlined Button" 
					  en ${Math.round((buttonData["other"] / totalClicks) * 100)}% koos een andere optie.`
						: "Laden..."}
				</h1>
			</div>
			<div className="chartContainer">{chartData ? <Pie data={chartData} /> : "Laden..."}</div>
		</div>
	);
}

export default EndText;
