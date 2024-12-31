import React from "react"; // Importeer de basis React library voor het bouwen van componenten
import { useInView, animated } from "@react-spring/web"; // Importeer de hooks van react-spring voor animaties

function TextHuman2() {
	// Gebruik de `useInView` hook om een animatie te creëren die afspeelt wanneer het element in beeld komt
	const [refSlideIn, slideIn] = useInView(
		() => ({
			// Start de animatie met het element buiten beeld (rechts), en maak het onzichtbaar
			from: {
				transform: "translateX(100%)", // Het element begint buiten beeld vanaf de rechterkant
				opacity: 0, // Het element is onzichtbaar bij het starten van de animatie
			},
			// Wanneer het element in beeld komt, wordt het verschoven naar 40% van de breedte van de container, en volledig zichtbaar
			to: {
				transform: "translateX(40%)", // Het element beweegt naar 40% van zijn oorspronkelijke positie
				opacity: 1, // Het element wordt volledig zichtbaar
			},
			// Stel de snelheid en het effect van de animatie in met de configuratie-opties
			config: {
				tension: 10, // Bepaalt hoe snel de animatie beweegt (lager is trager)
				friction: 10, // Bepaalt de wrijving tijdens de animatie (lager betekent minder vertraging aan het einde)
			},
		}),
		{
			once: true, // De animatie gebeurt maar één keer wanneer het element in beeld komt
		}
	);

	return (
		<>
			<div>
				{" "}
				{/* Buitenste container div voor alles */}
				{/* De verschillende stukken tekst krijgen de geanimeerde stijl van de `refSlideIn` en `slideIn` */}
				<div className="textHuman2">
					{/* Een geanimeerde h1 die beweegt en verandert van zichtbaarheid */}
					<animated.h1 ref={refSlideIn} style={slideIn}>
						Jef werd gefrustreerd vandaag...
					</animated.h1>
				</div>
				<div className="textHuman2">
					<animated.h1 ref={refSlideIn} style={slideIn}>
						Hij moest werken voor school maar zijn pagina laade niet snel in...
					</animated.h1>
				</div>
				<div className="textHuman2">
					<animated.h1 ref={refSlideIn} style={slideIn}>
						Waardoor hij niet snel kon werken en vaak de pagina moest herladen.
					</animated.h1>
				</div>
			</div>
		</>
	);
}

export default TextHuman2; // Exporteer de TextHuman2 component zodat deze kan worden gebruikt op andere plaatsen
