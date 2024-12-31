import React, { useEffect, useState } from "react";
// Importeren van animatiefunctionaliteit (momenteel niet gebruikt in de component)
import { useInView, animated } from "@react-spring/web";

function ExplenationText2() {
	// Stap 1: States voor het opslaan van gegevens en het bijhouden van eventuele fouten
	const [reloadPercentage, setReloadPercentage] = useState(null); // Het percentage van mensen die de pagina snel herladen
	const [averageReloads, setAverageReloads] = useState(null); // Het gemiddelde aantal herlaadacties in 10 seconden
	const [error, setError] = useState(""); // Een foutmelding als er iets misgaat tijdens het ophalen van gegevens

	// Stap 2: useEffect voor het ophalen van gegevens
	useEffect(() => {
		// Ophalen van het percentage van gebruikers die de pagina binnen 5 seconden herladen
		fetch("http://localhost:3001/reload-within-5-seconds")
			.then((response) => {
				// Controle of de server een geldig antwoord geeft
				if (!response.ok) {
					throw new Error("Server responsde niet goed voor reload-within-5-seconds");
				}
				return response.json(); // Zet de response om in JSON
			})
			.then((data) => {
				// Zet het opgehaalde percentage in de state
				setReloadPercentage(data.percentage);
			})
			.catch((error) => {
				// Foutafhandeling als er iets misgaat bij het ophalen van gegevens
				console.error("Error fetching reload percentage:", error);
				setError(`Er is een probleem met het ophalen van de gegevens: ${error.message}`);
			});

		// Ophalen van het gemiddelde aantal herlaadacties binnen 10 seconden
		fetch("http://localhost:3001/average-reload-in-10-seconds")
			.then((response) => {
				if (!response.ok) {
					console.error("Server responsde niet goed voor average-reload-in-10-seconds:", response.statusText);
					setError("Er is een probleem met het ophalen van de gegevens voor gemiddelde herlaadacties.");
					throw new Error("Server responsde niet goed");
				}
				return response.json();
			})
			.then((data) => {
				// Zet het gemiddelde aantal herlaadacties in de state
				setAverageReloads(data.averageReloads);
			})
			.catch((error) => {
				// Foutafhandeling voor het ophalen van het gemiddelde aantal herlaadacties
				console.error("Error fetching average reloads:", error);
				setError(error.message); // Sla de foutmelding op in de state en toon deze in de UI
			});
	}, []); // Lege array betekent dat de fetch-oproepen alleen worden uitgevoerd bij de initiële weergave van de component

	return (
		<div className="explenationText2">
			{error ? (
				// Als er een fout is opgetreden, wordt die getoond
				<h1>{error}</h1>
			) : (
				<>
					{/* Weergave van het percentage als het succesvol geladen is */}
					<h1>
						{reloadPercentage !== null ? (
							<>
								<span style={{ fontWeight: "bold" }}>{reloadPercentage}%</span> van de mensen herladen de pagina binnen de 5 seconden
							</>
						) : (
							// Als de data nog niet geladen is, tonen we "Laden..."
							"Laden..."
						)}
					</h1>

					{/* Weergave van het gemiddelde aantal herlaadacties in 10 seconden */}
					<h1>
						{averageReloads !== null ? (
							<>
								<span style={{ fontWeight: "bold" }}>{averageReloads}</span> keer is het gemiddelde aantal herlaadacties in 10 seconden
							</>
						) : (
							// Als de data nog niet geladen is, tonen we "Laden..."
							"Laden..."
						)}
					</h1>
				</>
			)}
		</div>
	);
}

export default ExplenationText2;
