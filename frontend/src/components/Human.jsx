import { useInView, animated } from "@react-spring/web";
import man from "../assests/images/man.jpg";

function Human() {
	const [refSlideIn, slideIn] = useInView(() => ({
		from: {
			transform: "translateX(-100%)",
		},
		to: {
			transform: "translateX(60%)",
		},
		config: {
			tension: 20,
			friction: 20,
		},
	}));

	return (
		<div className="manBox">
			<animated.img className="man" ref={refSlideIn} style={slideIn} src={man} alt="" />
		</div>
	);
}
export default Human;
