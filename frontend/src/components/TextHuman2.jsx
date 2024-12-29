import React from "react";
import { useInView, animated } from "@react-spring/web";

function TextHuman2() {
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
			<div className="textHuman2">
				{/* <animated.h1 ref={refSlideIn} style={slideIn}>
				Prins valt in het water door de storm
			</animated.h1> */}
				<h1>Jef werd gefrustreerd vandaag...</h1>
			</div>
			<div className="textHuma2">
				{/* <animated.h1 ref={refSlideIn} style={slideIn}>
            Prins valt in het water door de storm
        </animated.h1> */}
				<h1>Hij moest werken voor school maar zijn pagina laade niet snel in...</h1>
			</div>
		</>
	);
}

export default TextHuman2;
