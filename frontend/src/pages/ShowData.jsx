import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Human from "../components/Human";
import ExplenationText from "../components/ExplenationText";
import ExplenationText2 from "../components/ExplenationText2";
import EndText from "../components/EndText";

function ShowData() {
	return (
		<div>
			<Parallax className="parallaxHome" pages={4} style={{ top: "0", left: "0" }}>
				<ParallaxLayer offset={0} speed={0}>
					<Human></Human>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0}>
					<ExplenationText></ExplenationText>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0}>
					<ExplenationText2></ExplenationText2>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0}>
					<EndText></EndText>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default ShowData;
