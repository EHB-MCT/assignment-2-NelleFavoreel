// Importeren van benodigde React-componenten en hooks
import React from "react";
import { Link } from "react-router-dom"; // Voor routing naar andere pagina's
import Nav from "../components/Nav"; // Navigatie component dat naar andere pagina's leidt

function Home() {
	return (
		<>
			{/* Nav component dat de navigatie weergeeft */}
			<Nav />

			{/* Container voor de homepagina-inhoud */}
			<div className="homePageContainer">
				{/* Welkomsttekst voor de gebruiker */}
				<div className="welcomeText">
					<h1>Welkom op mijn Data Visualisatie!</h1>
					<p>Ontdek interessante inzichten door middel van gevisualiseerde data en de manier waarop ik deze heb verzameld.</p>
				</div>

				{/* Keuzemenu voor de gebruiker */}
				<div className="pageSelection">
					<h2>Maak een keuze</h2>
					<p>Je kunt kiezen tussen twee verschillende pagina's:</p>

					{/* Container voor de twee keuzes met aparte card-stijl opties */}
					<div className="options">
						{/* De eerste optie: Gevisualiseerde data */}
						<div className="optionCard">
							<h3>Gevisualiseerde Data</h3>
							<p>Bekijk de resultaten van de test in de vorm van gevisualiseerde data, adhv een parallax scroll pagina.</p>
							{/* Button-link naar de pagina met gevisualiseerde data */}
							<Link to="/ShowData" className="btnLink">
								Bekijk de visualisatie
							</Link>
						</div>

						{/* De tweede optie: Uitleg over hoe data is opgehaald */}
						<div className="optionCard">
							<h3>Hoe de Data is Opgehaald</h3>
							<p>Ontdek hoe de data is verzameld en op welke manier dat is gedaan.</p>
							{/* Button-link naar de pagina met uitleg over de dataophaling */}
							<Link to="/Data" className="btnLink">
								Ga naar dataophalen
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
