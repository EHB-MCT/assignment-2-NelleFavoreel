import React from "react";
import { useInView, animated } from "@react-spring/web";

function TextHuman() {
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
		<div className="textHuman">
			{/* <animated.h1 ref={refSlideIn} style={slideIn}>
				Prins valt in het water door de storm
			</animated.h1> */}
			<h1>Dit is Jef</h1>
			<h1>Jef is 19 jaar</h1>
			<h1>en is student</h1>
		</div>
	);
}

export default TextHuman;
