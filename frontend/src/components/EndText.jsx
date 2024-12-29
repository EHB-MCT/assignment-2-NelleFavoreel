import React, { useEffect, useState } from "react";
import { useInView, animated } from "@react-spring/web";

function EndText() {
	const [clearButtonPercentage, setClearButtonPercentage] = useState(null);

	useEffect(() => {
		// Haal het percentage op van de users die op "clear-button" klikten
		fetch("http://localhost:3001/percentage-clear-button")
			.then((response) => response.json())
			.then((data) => setClearButtonPercentage(data.percentage))
			.catch((error) => console.error("Fout bij het ophalen van het percentage:", error));
	}, []);

	return (
		<div className="EndText">
			<h1>
				{clearButtonPercentage !== null
					? `Uit de test bleek dat ${clearButtonPercentage}% van de gebruikers direct op de juiste knop klikte. Dit onderstreept hoe sterk gewoontes en intuïtie ons gedrag sturen, vooral in digitale omgevingen. Het ontwerp van een interface speelt hierbij een cruciale rol in het verminderen van frustratie en het vergroten van gebruiksgemak.`
					: "Laden..."}
			</h1>
		</div>
	);
}

export default EndText;
