import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Human from "../components/Human";
import TextHuman from "../components/TextHuman";
import TextHuman2 from "../components/TextHuman2";
import ExplenationText from "../components/ExplenationText";
import ExplenationText2 from "../components/ExplenationText2";
import ExplenationText3 from "../components/ExplenationText3";
import EndText from "../components/EndText";
import "../modules/StylingShowdata.css";
import man2 from "../assests/images/man2.png";

function ShowData() {
	return (
		<Parallax className="parallaxHome" pages={6} style={{ top: "0", left: "0" }}>
			<div className="manContent">
				<ParallaxLayer offset={0} speed={0}>
					<div>
						<Human />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0}>
					<TextHuman></TextHuman>
				</ParallaxLayer>
			</div>
			<ParallaxLayer className="workingMan" offset={1} speed={0}>
				<img className="manPicture" src={man2} alt="" />
				<TextHuman2></TextHuman2>
			</ParallaxLayer>
			<ParallaxLayer offset={2.4} speed={1}>
				<ExplenationText></ExplenationText>
			</ParallaxLayer>
			<ParallaxLayer offset={3} speed={1}>
				<ExplenationText2></ExplenationText2>
			</ParallaxLayer>
			<ParallaxLayer offset={4} speed={1}>
				<ExplenationText3></ExplenationText3>
			</ParallaxLayer>
			<ParallaxLayer offset={5} speed={0}>
				<EndText></EndText>
			</ParallaxLayer>
		</Parallax>
	);
}

export default ShowData;
