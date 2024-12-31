import React from "react"; // Importeer React, nodig voor het maken van componenten
import { Parallax, ParallaxLayer } from "@react-spring/parallax"; // Importeer Parallax en ParallaxLayer van react-spring voor scrolbewegingen
import Human from "../components/Human"; // Component voor het weergeven van een persoon met animatie
import TextHuman from "../components/TextHuman"; // Component voor tekst over de persoon
import TextHuman2 from "../components/TextHuman2"; // Meer tekstcomponent over de persoon en wat er met hem gebeurde
import ExplenationText from "../components/ExplenationText"; // Component voor uitlegstekst
import ExplenationText2 from "../components/ExplenationText2"; // Nog meer uitlegstekst
import ExplenationText3 from "../components/ExplenationText3"; // Verdere uitlegstekst met visualisatie
import EndText from "../components/EndText"; // Eindtekst na het uitlegproces
import "../modules/StylingShowdata.css"; // CSS-bestand voor de styling van deze pagina
import man2 from "../assests/images/man2.png"; // Een afbeelding van een man
import brainGif from "../assests/videos/brain.gif"; // Een video of gif met hersenanimeer

function ShowData() {
	return (
		// De Parallax component maakt een scrolleffect door verschillende lagen op verschillende snelheden af te spelen
		<Parallax className="parallaxHome" pages={6} style={{ top: "0", left: "0" }}>
			<div className="manContent">
				{/* Laag 1 (offset=0) toont de eerste animaties van de man en tekst */}
				<ParallaxLayer offset={0} speed={0}>
					<div>
						<Human /> {/* Toont de persoon met animatie */}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0}>
					<TextHuman /> {/* Toont de bijbehorende tekst over de persoon */}
				</ParallaxLayer>
			</div>

			{/* Laag 2 (offset=1) bevat een afbeelding van een man en meer tekst */}
			<ParallaxLayer className="workingMan" offset={1} speed={0}>
				<img className="manPicture" src={man2} alt="" /> {/* Toont een afbeelding van een man */}
				<TextHuman2 /> {/* Toont de tekst over wat de man vandaag ervoer */}
			</ParallaxLayer>

			{/* Laag 3 (offset=2.4) toont uitlegtekst over langzame laadtijden */}
			<ParallaxLayer offset={2.4} speed={1}>
				<ExplenationText /> {/* Legt meer uit over de impact van trage laadtijden */}
			</ParallaxLayer>

			{/* Laag 4 (offset=2.8) toont meer uitleg en gegevens */}
			<ParallaxLayer offset={2.8} speed={1}>
				<ExplenationText2 /> {/* Meer uitleg over het reload-percentage */}
			</ParallaxLayer>

			{/* Laag 5 (offset=4) heeft een hersen gif en een verdergaande uitleg */}
			<ParallaxLayer
				offset={4}
				className="brainContent"
				speed={0}
				style={{ backgroundColor: "black" }} // Het instellen van de achtergrondkleur naar zwart voor deze laag
			>
				<img src={brainGif} className="brain" alt="Brain Animation" /> {/* Toont een gif van een hersenanimeer */}
				<ExplenationText3 /> {/* De uitleg die verder gaat over de effecten van laadtijd op het brein */}
			</ParallaxLayer>

			{/* Laag 6 (offset=5) bevat de eindtekst van de pagina */}
			<ParallaxLayer offset={5} speed={0} style={{ backgroundColor: "black" }}>
				<EndText /> {/* De eindtekst die de gebruiker uitleg geeft over het belang van snelheid op de website */}
			</ParallaxLayer>
		</Parallax>
	);
}

export default ShowData; // Exporteer de ShowData-component voor gebruik in andere delen van de app
