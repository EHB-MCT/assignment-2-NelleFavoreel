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
						backgroundColor: ["#bfcaff", "#750094", "#005e9f"],
						hoverBackgroundColor: ["#bfcaff", "#750094", "#005e9f"],
						borderColor: "transparent", // Verwijder de borderkleur
						borderWidth: 0, // Verwijder de border breedte
					},
				],
		  }
		: null;

	return (
		<div className="EndText">
			<div className="textContainer">
				<h3>
					Uit de test bleek ook dat mensen gewoontedieren zijn en sterk geneigd zijn te klikken op elementen die ze kennen en herkennen. Uit de resultaten kwam naar voren dat meer dan de helft van de deelnemers voor de echte knop koos. <br />
					<br />
					{buttonData !== null ? (
						<>
							Uit de test bleek dat:
							<span className="percentage">{Math.round((buttonData["clear-button"] / totalClicks) * 100)}%</span> koos de juiste button,
							<span className="percentage">{Math.round((buttonData["underlined-button"] / totalClicks) * 100)}%</span> koos de onderlijnde button en <span className="percentage">{Math.round((buttonData["other"] / totalClicks) * 100)}%</span> koos een
							andere optie.
						</>
					) : (
						"Laden..."
					)}{" "}
					<br /> <br />
					Het is daarom essentieel om een goed werkende en duidelijke website te creëren, omdat mensen vaak gewoontedieren zijn en snel gefrustreerd kunnen raken.
				</h3>
			</div>
			<div className="chartContainer">{chartData ? <Pie data={chartData} /> : "Laden..."}</div>
		</div>
	);
}

export default EndText;
