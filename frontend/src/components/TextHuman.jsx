import React from "react"; // Importeer de basis React library voor componenten en JSX
import { useInView, animated } from "@react-spring/web"; // Importeer `useInView` voor het animeren bij het in beeld komen en `animated` voor het toepassen van animaties

function TextHuman() {
	// De useInView hook definieert een animatie die afspeelt wanneer het element in beeld komt
	const [refSlideIn, slideIn] = useInView(
		() => ({
			// Animatie begint vanaf de rechterkant (100%) en een opacity van 0 (onzichtbaar)
			from: {
				transform: "translateX(100%)",
				opacity: 0, // Start met het element volledig onzichtbaar
			},
			// Animatie eindigt met het element verschoven naar 60% van het scherm en volledig zichtbaar
			to: {
				transform: "translateX(60%)",
				opacity: 1, // Het element wordt volledig zichtbaar
			},
			// De animatieconfiguratie voor het soepel verloop (lagere waarden geven trager effect)
			config: {
				tension: 10, // Hoe 'vast' de animatie is (hoe sneller/strakker de beweging)
				friction: 10, // Hoeveel weerstand (wrijving) er is tijdens de animatie
			},
		}),
		{
			once: true, // Zorg ervoor dat de animatie maar één keer wordt afgespeeld wanneer het element in beeld komt
		}
	);

	return (
		// Container voor de geanimeerde tekst
		<div className="textHuman">
			{/* Elke animated.h1 krijgt een aparte ref en stijl, zodat ze individueel geanimeerd worden */}
			<animated.h1 ref={refSlideIn} style={slideIn}>
				Dit is Jef
			</animated.h1>
			<animated.h1 ref={refSlideIn} style={slideIn}>
				Jef is 19 jaar
			</animated.h1>
			<animated.h1 ref={refSlideIn} style={slideIn}>
				en is student
			</animated.h1>
		</div>
	);
}

export default TextHuman; // Exporteer de TextHuman component zodat deze elders kan worden gebruikt
