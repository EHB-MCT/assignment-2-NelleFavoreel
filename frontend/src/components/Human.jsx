import { useInView, animated } from "@react-spring/web";
import man from "../assests/images/man.jpg";

function Prince() {
	// const [refSlideIn, slideIn] = useInView(() => ({
	// 	from: {
	// 		transform: "translateY(170%)",
	// 	},
	// 	to: {
	// 		transform: "translateY(180%)",
	// 	},
	// 	config: {
	// 		tension: 20,
	// 		friction: 20,
	// 	},
	// }));

	return (
		<div className="manBox">
			{/* <animated.img ref={refSlideIn} style={slideIn} className="princePicture" src={picture} alt="" /> */}
			<img src={man} alt="" />
		</div>
	);
}
export default Prince;
