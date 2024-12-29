// Importeren van de benodigde modules
const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// Middleware voor CORS en JSON-parsing
app.use(cors()); // Zorgt ervoor dat je applicatie API-verzoeken van andere domeinen accepteert
app.use(express.json()); // Voor het automatisch parseren van JSON body in POST verzoeken
app.use(express.static("public")); // Maakt statische bestanden, zoals HTML, CSS, JS beschikbaar

// Poort instellen voor de server (standaard naar poort 3001 als deze niet beschikbaar is)
const port = process.env.PORT || 3001; // Gebruik de omgevingstable voor poortinstelling
app.listen(port, () => {
	console.log(`Server draait op http://localhost:${port}`); // Server draait en logt de adresinformatie
});

// MongoDB verbinding URI en client configuratie
const uri = "mongodb+srv://nellefavoreel:eKVVoazRlRrQYtxL@web2.gaz0k0d.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1, // Specificatie voor welke versie van de API wordt gebruikt
		strict: false, // Strikte controle op API gedrag
		deprecationErrors: true, // Waarschuwingen voor verouderde functies
	},
});

// Functie voor het verbinden met MongoDB
async function connectToMongoDB() {
	try {
		await client.connect(); // Poging om verbinding te maken met de MongoDB server
		console.log("Verbonden met MongoDB!"); // Als succesvol, loggen van bericht
	} catch (err) {
		console.error("Fout bij verbinding met MongoDB:", err); // Foutmeldingen als er iets misgaat
	}
}
connectToMongoDB(); // Roept de connectie functie aan om verbinding te maken met MongoDB

// POST endpoint voor het opslaan van gegevens vanuit de frontend
app.post("/data", async (req, res) => {
	try {
		console.log("Ontvangen data:", req.body); // Loggen van de ontvangen data

		// Extracteer specifieke data van het verzoek
		const { action, elapsedTime, timestamp, reloadCount, reloadFirstClickTime, firstButtonClicked } = req.body;

		// Controleer of de vereiste data aanwezig is
		if (!action || elapsedTime === undefined || !timestamp || reloadCount === undefined || reloadFirstClickTime === undefined) {
			console.error("Ontbrekende of ongeldige data:", { action, elapsedTime, timestamp, reloadCount, reloadFirstClickTime, firstButtonClicked });
			return res.status(400).send("Fout: Ontbrekende of ongeldige data."); // Foutmelding bij ontbrekende data
		}

		// Data wordt opgeslagen in de MongoDB database
		const database = client.db("Dev5"); // Verbindt met database "Dev5"
		const collection = database.collection("UserActions"); // Verbindt met de collectie "UserActions"

		// Gegevens worden ingevoegd in de MongoDB collectie
		const result = await collection.insertOne({
			action,
			elapsedTime,
			timestamp,
			reloadCount,
			reloadFirstClickTime,
			firstButtonClicked: firstButtonClicked || "", // Als de 'firstButtonClicked' ontbreekt, stel het in als een lege string
		});

		console.log("Opslag resultaat:", result); // Resultaat van de insert actie loggen
		res.status(200).send("Data succesvol opgeslagen!"); // Positieve respons naar de frontend
	} catch (err) {
		console.error("Fout bij opslaan:", err); // Foutmelding als de insert mislukt
		res.status(500).send("Er is een fout opgetreden bij het opslaan."); // Generieke foutmelding
	}
});

// GET endpoint om het percentage van gebruikers die de pagina herladen te berekenen
app.get("/reload-percentage", async (req, res) => {
	try {
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		// Tel het aantal documenten waar reloadCount > 0 (aantal gebruikers die de pagina herladen)
		const reloadCount = await collection.countDocuments({ reloadCount: { $gt: 0 } });
		// Tel het totaal aantal documenten in de collectie (totaal aantal gebruikers)
		const totalCount = await collection.countDocuments();

		// Het percentage van gebruikers die de pagina herladen berekenen
		const percentage = totalCount === 0 ? 0 : Math.round((reloadCount / totalCount) * 100); // Voorkom deling door nul

		res.json({ percentage }); // Stuur het percentage als JSON reactie terug
	} catch (err) {
		console.error("Error fetching reload percentage:", err); // Foutmelding bij ophalen van gegevens
		res.status(500).send("Fout bij het ophalen van het percentage."); // Algemene foutmelding
	}
});

// GET endpoint voor het berekenen van het percentage van gebruikers die herladen binnen 5 seconden
app.get("/reload-within-5-seconds", async (req, res) => {
	try {
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		// Haal gebruikers die binnen 5 seconden na hun eerste click hebben herladen
		const quickReloadUsers = await collection.find({ reloadFirstClickTime: { $lte: 5 } }).toArray();
		// Extract unieke gebruikers (gebruikers _id) uit de resultaten
		const uniqueQuickReloadUsers = [...new Set(quickReloadUsers.map((user) => user._id.toString()))];

		console.log("Aantal gebruikers die binnen 5 seconden herladen:", uniqueQuickReloadUsers.length); // Log aantal gebruikers

		// Haal het totaal aantal unieke gebruikers
		const totalUsersCount = await collection.distinct("_id");

		console.log("Aantal totaal unieke gebruikers:", totalUsersCount.length);

		// Percentage berekenen
		const percentage = totalUsersCount.length === 0 ? 0 : Math.round(((uniqueQuickReloadUsers.length / totalUsersCount.length) * 100) / 10) * 10;

		console.log("Percentage gebruikers die de pagina binnen 5 seconden herladen:", percentage);

		// Stuur het percentage als JSON
		res.json({ percentage });
	} catch (err) {
		console.error("Error fetching quick reload percentage:", err);
		res.status(500).send("Fout bij het ophalen van het percentage.");
	}
});

// GET endpoint voor het berekenen van het gemiddelde aantal herlaadacties binnen 10 seconden
app.get("/average-reload-in-10-seconds", async (req, res) => {
	try {
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		// Vind records van herlaadacties binnen 10 seconden
		const reloadRecords = await collection.find({ reloadFirstClickTime: { $lte: 10 } }).toArray();

		// Bereken het gemiddelde aantal herlaadacties
		const totalReloads = reloadRecords.reduce((sum, record) => sum + record.reloadCount, 0);
		const averageReloads = reloadRecords.length === 0 ? 0 : totalReloads / reloadRecords.length;

		console.log("Gemiddeld aantal herlaadacties binnen 10 seconden:", averageReloads); // Log het gemiddelde aantal herlaadacties
		res.json({ averageReloads: averageReloads.toFixed(2) }); // Antwoord met het gemiddelde, afgerond op 2 decimalen
	} catch (err) {
		console.error("Error fetching average reloads in 10 seconds:", err);
		res.status(500).send("Fout bij het ophalen van het gemiddelde.");
	}
});

// GET endpoint voor het berekenen van het percentage gebruikers die de 'clear-button' hebben geklikt
app.get("/percentage-clear-button", async (req, res) => {
	try {
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		// Zoek naar gebruikers die de 'clear-button' hebben geklikt
		const usersWhoClickedClearButton = await collection.find({ firstButtonClicked: "clear-button" }).toArray();

		// Haal het totaal aantal unieke gebruikers
		const totalUsersCount = await collection.distinct("_id");

		console.log("Aantal gebruikers die de clear-button klikten:", usersWhoClickedClearButton.length); // Aantal gebruikers die hebben geklikt
		console.log("Aantal totaal unieke gebruikers:", totalUsersCount.length); // Totaal aantal gebruikers

		// Bereken het percentage van gebruikers die de "clear-button" hebben geklikt
		const percentage = totalUsersCount.length === 0 ? 0 : Math.round((usersWhoClickedClearButton.length / totalUsersCount.length) * 100); // Het percentage berekenen

		console.log("Percentage van gebruikers die de clear-button klikten:", percentage); // Log het percentage

		// Antwoord met het percentage
		res.json({ percentage });
	} catch (err) {
		console.error("Error fetching percentage clear button users:", err);
		res.status(500).send("Fout bij het ophalen van het percentage.");
	}
});
