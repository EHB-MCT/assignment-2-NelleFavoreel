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
			<h1>Dat is normaal {reloadPercentage !== null ? `${reloadPercentage}%` : "laden..."} van de mensen herlaad de pagina snel</h1>
		</div>
	);
}

export default ExplenationText;
