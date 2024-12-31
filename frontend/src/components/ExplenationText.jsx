import React, { useEffect, useState } from "react";
// Gebruik van 'useInView' en 'animated' voor animaties (momenteel niet gebruikt in de component, maar mogelijk toegevoegd in toekomstige functies)
import { useInView, animated } from "@react-spring/web";

function ExplenationText() {
	// Stap 1: State voor het opslaan van de percentage-gegevens
	const [reloadPercentage, setReloadPercentage] = useState(null); // Initieel wordt de percentage-instelling op null gezet

	// Stap 2: Gebruik van useEffect om de percentage-informatie eenmalig op te halen van de server
	useEffect(() => {
		// Haal de gegevens van de backend die het herlaadpercentage bevatten
		fetch("http://localhost:3001/reload-percentage")
			.then((response) => response.json()) // Zet het antwoord van de API om in JSON
			.then((data) => {
				// Stap 3: Zet de opgehaalde percentage op in de state
				setReloadPercentage(data.percentage); // Bewaar de percentage-waarde in de state 'reloadPercentage'
			})
			.catch((error) => {
				// Foutafhandeling: als er iets misgaat bij het ophalen van de data
				console.error("Error fetching reload percentage:", error); // Toon een foutmelding in de console
			});
	}, []); // De lege array betekent dat de fetch alleen wordt uitgevoerd bij de eerste rendering (zoals componentDidMount)

	return (
		<div className="explenationText">
			{/* Stap 4: Renderen van de inhoud */}
			<h1>
				Dat is normaal{" "}
				{/* De waarde van de percentage wordt hier weergegeven. 
            Als de data nog niet is geladen, wordt "laden..." getoond. */}
				<span>{reloadPercentage !== null ? `${reloadPercentage}%` : "laden..."}</span> van de mensen herlaadt de pagina snel
			</h1>
		</div>
	);
}

export default ExplenationText;
