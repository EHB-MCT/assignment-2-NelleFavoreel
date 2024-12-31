import React, { useEffect, useState } from "react";
import { useInView, animated } from "@react-spring/web";

function ExplenationText2() {
	const [reloadPercentage, setReloadPercentage] = useState(null);
	const [averageReloads, setAverageReloads] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		// Ophalen van percentage van gebruikers die de pagina binnen 5 seconden herladen
		fetch("http://localhost:3001/reload-within-5-seconds")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Server responsde niet goed voor reload-within-5-seconds");
				}
				return response.json();
			})
			.then((data) => {
				setReloadPercentage(data.percentage);
			})
			.catch((error) => {
				console.error("Error fetching reload percentage:", error);
				setError(`Er is een probleem met het ophalen van de gegevens: ${error.message}`);
			});

		// Ophalen van het gemiddelde aantal herlaadacties in 10 seconden
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
				setAverageReloads(data.averageReloads);
			})
			.catch((error) => {
				console.error("Error fetching average reloads:", error);
				setError(error.message); // Toon fout in UI
			});
	}, []);

	return (
		<div className="explenationText2">
			{error ? (
				<h1>{error}</h1> // Als er een fout is, tonen we die in plaats van de data
			) : (
				<>
					<h1>
						{reloadPercentage !== null ? (
							<>
								<span style={{ fontWeight: "bold" }}>{reloadPercentage}%</span> van de mensen herladen de pagina binnen de 5 seconden
							</>
						) : (
							"Laden..."
						)}
					</h1>
					<h1>
						{averageReloads !== null ? (
							<>
								<span style={{ fontWeight: "bold" }}>{averageReloads}</span> keer is het gemiddelde aantal herlaadacties in 10 seconden
							</>
						) : (
							"Laden..."
						)}
					</h1>
				</>
			)}
		</div>
	);
}

export default ExplenationText2;
