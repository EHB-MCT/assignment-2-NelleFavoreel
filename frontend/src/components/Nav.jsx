import React from "react"; // Importeer de basis React library voor componenten en JSX
import { Link } from "react-router-dom"; // Importeer de `Link` component van `react-router-dom`, waarmee we binnen de app kunnen navigeren zonder de pagina opnieuw te laden

function Nav() {
	return (
		// Navigation component met een unordered list (ul) voor de navigatielinks
		<nav className="navigation">
			<ul>
				{/* Elke list item (li) bevat een Link component die verwijst naar verschillende routes */}
				<li>
					{/* De Link component creëert een hyperlink naar de root van de applicatie (Home) */}
					<Link to="/">Home</Link>
				</li>
				<li>
					{/* De Link component linkt naar een andere route binnen de app - in dit geval ShowData */}
					<Link to="/ShowData">ShowData</Link>
				</li>
				<li>
					{/* De Link component linkt naar een andere pagina binnen de app - in dit geval Data */}
					<Link to="/Data">Data</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav; // Exporteer de Nav component zodat deze ergens anders gebruikt kan worden
