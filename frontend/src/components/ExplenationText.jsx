import React, { useEffect, useState } from "react";
import { useInView, animated } from "@react-spring/web";

function ExplenationText() {
	const [reloadPercentage, setReloadPercentage] = useState(null);
	useEffect(() => {
		fetch("http://localhost:3001/reload-percentage")
			.then((response) => response.json())
			.then((data) => {
				setReloadPercentage(data.percentage);
			})
			.catch((error) => {
				console.error("Error fetching reload percentage:", error);
			});
	}, []);
	// // Animatie-instellingen (van beneden naar boven)
	// const [refSlideIn, slideIn] = useInView(
	// 	() => ({
	// 		from: {
	// 			transform: "translateY(100%)", // Startpositie: onderaan
	// 			opacity: 0, // Start met onzichtbaar
	// 		},
	// 		to: {
	// 			transform: "translateY(0%)", // Eindpositie: op zijn plek
	// 			opacity: 1, // Volledig zichtbaar
	// 		},
	// 		config: {
	// 			tension: 10,
	// 			friction: 10,
	// 		},
	// 	}),
	// 	{
	// 		once: true, // Animatie gebeurt slechts eenmaal
	// 	}
	// );

	return (
		<div className="explenationText">
			{/* <animated.h1 ref={refSlideIn} style={slideIn}>
				Dat is normaal {reloadPercentage !== null ? `${reloadPercentage}%` : "laden..."} van de mensen herlaadt de pagina snel
			</animated.h1> */}
			<h1>
				Dat is normaal <span> {reloadPercentage !== null ? `${reloadPercentage}%` : "laden..."} </span> van de mensen herlaadt de pagina snel
			</h1>
		</div>
	);
}

export default ExplenationText;
