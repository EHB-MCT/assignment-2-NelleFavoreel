import React from "react";
import { useInView, animated } from "@react-spring/web";

function ExplenationText3() {
	// const [refSlideIn, slideIn] = useInView(
	// 	() => ({
	// 		from: {
	// 			transform: "translateX(-90%)",
	// 		},
	// 		to: {
	// 			transform: "translateX(0%)",
	// 		},
	// 		config: {
	// 			tension: 10,
	// 			friction: 10,
	// 		},
	// 	}),
	// 	{
	// 		once: true,
	// 	}
	// );

	return (
		<>
			<div className="explenationText3">
				{/* <animated.h1 ref={refSlideIn} style={slideIn}>
				Prins valt in het water door de storm
			</animated.h1> */}
				<h1>Onze reactie op langzame laadtijden wordt sterk beïnvloed door ons brein:</h1>
				<li>Delay Discounting: We verkiezen snelle resultaten boven uitgestelde, zelfs als het wachten een betere ervaring biedt. Dit maakt wachten extra frustrerend.</li>
				<li>Cognitive Load Theory: Trage of niet-reagerende pagina’s verhogen de mentale inspanning, waardoor gebruikers afhaken.</li>
				<li>Expectation vs. Reality: We verwachten snelheid. Als een website niet snel laadt, ontstaat er teleurstelling en frustratie.</li>
				<li>Operant Conditioning: Herhaald herladen wordt beloond met werkende pagina’s, waardoor het gedrag wordt versterkt.</li>
			</div>
		</>
	);
}

export default ExplenationText3;
