import React from "react";
import { useInView, animated } from "@react-spring/web";

function ExplenationText() {
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
		<div className="explenationText">
			{/* <animated.h1 ref={refSlideIn} style={slideIn}>
				Prins valt in het water door de storm
			</animated.h1> */}
			<h1>Dat is normaal 90% van de mensen herlaad de pagina snel</h1>
		</div>
	);
}

export default ExplenationText;
