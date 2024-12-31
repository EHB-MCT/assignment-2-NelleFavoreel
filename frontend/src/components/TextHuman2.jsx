import React from "react";
import { useInView, animated } from "@react-spring/web";

function TextHuman2() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(100%)",
				opacity: 0, // Start met onzichtbaarheid
			},
			to: {
				transform: "translateX(40%)",
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
		<>
			<div>
				<div className="textHuman2">
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

export default TextHuman2;
