import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
	return (
		<>
			<Nav />
			<div className="homePageContainer">
				<div className="welcomeText">
					<h1>Welkom op mijn Data Visualisatie!</h1>
					<p>Ontdek interessante inzichten door middel van gevisualiseerde data en de manier waarop ik deze hebben verzameld.</p>
				</div>

				<div className="pageSelection">
					<h2>Maak een keuze</h2>
					<p>Je kunt kiezen tussen twee verschillende pagina's:</p>
					<div className="options">
						<div className="optionCard">
							<h3>Gevisualiseerde Data</h3>
							<p>Bekijk de resultaten van de test in de vorm van gevisualiseerde data, adhv een parallax scroll pagina .</p>
							<Link to="/ShowData" className="btnLink">
								Bekijk de visualisatie
							</Link>
						</div>

						<div className="optionCard">
							<h3>Hoe de Data is Opgehaald</h3>
							<p>Ontdek hoe de data is verzameld en op welke soort manier dat dat gedaan is.</p>
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
