import React from "react";

function ExplenationText3() {
	return (
		<>
			{/* Stap 1: Div die de uitlegtekst bevat */}
			<div className="explenationText3">
				{/* Stap 2: Titel van de tekst, die aangeeft waar de uitleg over gaat */}
				<h1>Onze reactie op langzame laadtijden wordt sterk beïnvloed door ons brein:</h1>
				<ul>
					<li>Delay Discounting: We verkiezen snelle resultaten boven uitgestelde, zelfs als het wachten een betere ervaring biedt. Dit maakt wachten extra frustrerend.</li>
					<li>Cognitive Load Theory: Trage of niet-reagerende pagina’s verhogen de mentale inspanning, waardoor gebruikers afhaken.</li>
					<li>Expectation vs. Reality: We verwachten snelheid. Als een website niet snel laadt, ontstaat er teleurstelling en frustratie.</li>
					<li>Operant Conditioning: Herhaald herladen wordt beloond met werkende pagina’s, waardoor het gedrag wordt versterkt.</li>
				</ul>
			</div>
		</>
	);
}

export default ExplenationText3;
