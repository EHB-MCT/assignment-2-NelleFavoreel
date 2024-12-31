import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registreer de noodzakelijke onderdelen van chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Functionele component die de eindresultaten toont
function EndText() {
	const [buttonData, setButtonData] = useState(null); // Stap 1: State voor het opslaan van de knoppen data van de backend

	// useEffect wordt aangeroepen wanneer de component voor het eerst wordt geladen
	useEffect(() => {
		// Stap 2: Haal de gegevens van de server (aantal klikken per knop) op
		fetch("http://localhost:3001/percentage-buttons")
			.then((response) => response.json()) // Gegevens omzetten naar JSON
			.then((data) => setButtonData(data)) // Sla de opgehaalde gegevens op in de buttonData state
			.catch((error) => console.error("Error:", error)); // Foutafhandelingslog
	}, []); // Lege array betekent dat de fetch maar 1 keer wordt uitgevoerd (zoals componentDidMount)

	// Stap 3: Bereken het totaal aantal klikken en de percentages per knop
	// Als buttonData niet null is, bereken dan de totaalsom van de klikken voor alle knoppen
	const totalClicks = buttonData ? buttonData["clear-button"] + buttonData["underlined-button"] + buttonData["other"] : 1; // Voeg een standaard waarde in (1) om delen door nul te voorkomen bij het inladen

	// Stap 4: Bereid de data voor de grafiek voor, inclusief percentage berekeningen
	const chartData = buttonData
		? {
				labels: ["Clear Button", "Underlined Button", "Other"], // Labelt de sectoren van de taartdiagram
				datasets: [
					{
						label: "Percentage van gebruikers", // Naam van het dataset
						data: [(buttonData["clear-button"] / totalClicks) * 100, (buttonData["underlined-button"] / totalClicks) * 100, (buttonData["other"] / totalClicks) * 100], // Percentage berekeningen voor elke knop
						backgroundColor: ["#bfcaff", "#750094", "#005e9f"], // Kleuren voor de verschillende delen van de taartdiagram
						hoverBackgroundColor: ["#bfcaff", "#750094", "#005e9f"], // Kleuren bij hover
						borderColor: "transparent", // Zorg dat er geen border is rond de taartsegmenten
						borderWidth: 0, // Zet de randdikte op 0 om randen te verwijderen
					},
				],
		  }
		: null; // Als buttonData nog niet geladen is, wordt chartData niet gezet

	return (
		<div className="EndText">
			<div className="textContainer">
				<h3>
					{/* Stap 5: Informatie weergeven voor de gebruiker */}
					Uit de test bleek ook dat mensen gewoontedieren zijn en sterk geneigd zijn te klikken op elementen die ze kennen en herkennen. Uit de resultaten kwam naar voren dat meer dan de helft van de deelnemers voor de echte knop koos. <br />
					<br />
					{/* Als de buttonData is geladen, worden percentages getoond, anders wordt 'Laden...' weergegeven */}
					{buttonData !== null ? (
						<>
							Uit de test bleek dat:
							{/* Berekening voor percentages, getoond in een span om specifieke styling mogelijk te maken */}
							<span className="percentage">{Math.round((buttonData["clear-button"] / totalClicks) * 100)}%</span> koos de juiste button,
							<span className="percentage">{Math.round((buttonData["underlined-button"] / totalClicks) * 100)}%</span> koos de onderlijnde button en <span className="percentage">{Math.round((buttonData["other"] / totalClicks) * 100)}%</span> koos een
							andere optie.
						</>
					) : (
						"Laden..."
					)}
					<br />
					<br />
					{/* Uitleg over de reden voor de testresultaten */}
					Het is daarom essentieel om een goed werkende en duidelijke website te creëren, omdat mensen vaak gewoontedieren zijn en snel gefrustreerd kunnen raken.
				</h3>
			</div>
			{/* Stap 6: Render de taartdiagram */}
			<div className="chartContainer">
				{/* Als chartData bestaat, wordt de Pie-chart gerenderd */}
				{chartData ? <Pie data={chartData} /> : "Laden..."}
			</div>
		</div>
	);
}

export default EndText;
