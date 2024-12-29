import React from "react";
import { useInView, animated } from "@react-spring/web";

function EndText() {
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
			<div className="EndText">
				{/* <animated.h1 ref={refSlideIn} style={slideIn}>
				Prins valt in het water door de storm
			</animated.h1> */}
				<h1>
					Uit de test bleek dat 90% van de gebruikers direct op de juiste knop klikte. Dit onderstreept hoe sterk gewoontes en intuïtie ons gedrag sturen, vooral in digitale omgevingen. Het ontwerp van een interface speelt hierbij een cruciale rol in
					het verminderen van frustratie en het vergroten van gebruiksgemak.
				</h1>
			</div>
		</>
	);
}

export default EndText;
