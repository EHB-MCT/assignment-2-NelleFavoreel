import { useInView, animated } from "@react-spring/web"; // Importeer noodzakelijke animatie hooks en componenten
import man from "../assests/images/man.jpg"; // Importeer de afbeelding

function Human() {
	// `useInView` wordt gebruikt om een animatie te triggeren wanneer het element in beeld komt
	const [refSlideIn, slideIn] = useInView(() => ({
		// Animatie-effect dat het element van links naar rechts beweegt
		from: {
			transform: "translateX(-100%)", // Beginpositie van het element buiten het scherm naar links
		},
		to: {
			transform: "translateX(60%)", // Eindpositie van het element, het beweegt naar rechts (60% vanaf het oorspronkelijke punt)
		},
		config: {
			tension: 20, // Zorgt voor een snellere beweging (hoe hoger de spanning, hoe sneller de animatie)
			friction: 20, // Zorgt voor een soepelere beweging (hoe meer wrijving, hoe geleidelijker de stop van de animatie)
		},
	}));

	return (
		// Container div die het geanimeerde plaatje vasthoudt
		<div className="manBox">
			{/* Geanimeerd img-tag, met de `refSlideIn` gekoppeld aan `ref` en de animatie stijlen toegepast via `style={slideIn}` */}
			<animated.img className="man" ref={refSlideIn} style={slideIn} src={man} alt="Human Image" />
		</div>
	);
}

export default Human;
