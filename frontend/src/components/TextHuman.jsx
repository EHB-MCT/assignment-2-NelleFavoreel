import React from "react";
import { useInView, animated } from "@react-spring/web";

function TextHuman() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(100%)",
				opacity: 0, // Start met onzichtbaarheid
			},
			to: {
				transform: "translateX(60%)",
				opacity: 1, // Ga naar volledige zichtbaarheid
			},
			config: {
				tension: 10,
				friction: 10,
			},
		}),
		{
			once: true, // Animatie gebeurt maar één keer
		}
	);

	return (
		<div className="textHuman">
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

export default TextHuman;
