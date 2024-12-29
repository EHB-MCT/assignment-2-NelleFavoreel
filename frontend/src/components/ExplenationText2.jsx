import React from "react";
import { useInView, animated } from "@react-spring/web";

function ExplenationText2() {
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
			<div className="explenationText2">
				{/* <animated.h1 ref={refSlideIn} style={slideIn}>
				Prins valt in het water door de storm
			</animated.h1> */}
				<h1>30% van die mensen deed dat binnen de 5 seconden</h1>
			</div>
			<div className="explenationText2">
				{/* <animated.h1 ref={refSlideIn} style={slideIn}>
            Prins valt in het water door de storm
        </animated.h1> */}
				<h1>6 keer de pagina herladen in 10 seconden is het gemiddelde</h1>
			</div>
		</>
	);
}

export default ExplenationText2;
