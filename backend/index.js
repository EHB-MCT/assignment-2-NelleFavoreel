const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// Poort instellen
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server draait op http://localhost:${port}`);
});

// MongoDB verbinden
const uri = "mongodb+srv://nellefavoreel:eKVVoazRlRrQYtxL@web2.gaz0k0d.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: false,
		deprecationErrors: true,
	},
});

async function connectToMongoDB() {
	try {
		await client.connect();
		console.log("Verbonden met MongoDB!");
	} catch (err) {
		console.error("Fout bij verbinding met MongoDB:", err);
	}
}
connectToMongoDB();

app.post("/data", async (req, res) => {
	try {
		console.log("Ontvangen data:", req.body);

		const { action, elapsedTime, timestamp, reloadCount, reloadFirstClickTime, firstButtonClicked } = req.body;

		if (!action || elapsedTime === undefined || !timestamp || reloadCount === undefined || reloadFirstClickTime === undefined) {
			console.error("Ontbrekende of ongeldige data:", { action, elapsedTime, timestamp, reloadCount, reloadFirstClickTime, firstButtonClicked });
			return res.status(400).send("Fout: Ontbrekende of ongeldige data.");
		}

		// Data opslaan in MongoDB
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		const result = await collection.insertOne({
			action,
			elapsedTime,
			timestamp,
			reloadCount,
			reloadFirstClickTime,
			firstButtonClicked: firstButtonClicked || "",
		});

		console.log("Opslag resultaat:", result);
		res.status(200).send("Data succesvol opgeslagen!");
	} catch (err) {
		console.error("Fout bij opslaan:", err);
		res.status(500).send("Er is een fout opgetreden bij het opslaan.");
	}
});

app.get("/reload-percentage", async (req, res) => {
	try {
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		// Het aantal records die het 'reloadCount' hebben (i.e. het aantal herlaadacties)
		const reloadCount = await collection.countDocuments({ reloadCount: { $gt: 0 } });
		// Het totaal aantal records in de collectie (totaal aantal interacties/gebruikers)
		const totalCount = await collection.countDocuments();

		// Het percentage berekenen
		const percentage = totalCount === 0 ? 0 : Math.round((reloadCount / totalCount) * 100);

		res.json({ percentage });
	} catch (err) {
		console.error("Error fetching reload percentage:", err);
		res.status(500).send("Fout bij het ophalen van het percentage.");
	}
});
app.get("/reload-within-5-seconds", async (req, res) => {
	try {
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		// Haal de documenten op waar reloadFirstClickTime <= 5 (d.w.z. herladen binnen 5 seconden)
		const quickReloadUsers = await collection.find({ reloadFirstClickTime: { $lte: 5 } }).toArray();

		// Extract unieke _id's (gebruikers) uit de documenten met reloadFirstClickTime <= 5
		const uniqueQuickReloadUsers = [...new Set(quickReloadUsers.map((user) => user._id.toString()))];

		console.log("Aantal gebruikers die binnen 5 seconden herladen:", uniqueQuickReloadUsers.length);

		// Haal het totaal aantal unieke gebruikers (unieke _id's)
		const totalUsersCount = await collection.distinct("_id");

		console.log("Aantal totaal unieke gebruikers:", totalUsersCount.length);

		// Bereken het percentage van gebruikers die de pagina binnen 5 seconden hebben herladen
		const percentage = totalUsersCount.length === 0 ? 0 : Math.round(((uniqueQuickReloadUsers.length / totalUsersCount.length) * 100) / 10) * 10;

		console.log("Percentage gebruikers die de pagina binnen 5 seconden herladen:", percentage);

		// Stuur het percentage als antwoord zonder afronding
		res.json({ percentage });
	} catch (err) {
		console.error("Error fetching quick reload percentage:", err);
		res.status(500).send("Fout bij het ophalen van het percentage.");
	}
});

app.get("/average-reload-in-10-seconds", async (req, res) => {
	try {
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		// Find all reload records where reload time <= 10 seconds
		const reloadRecords = await collection.find({ reloadFirstClickTime: { $lte: 10 } }).toArray();

		// Calculate average reload count
		const totalReloads = reloadRecords.reduce((sum, record) => sum + record.reloadCount, 0);
		const averageReloads = reloadRecords.length === 0 ? 0 : totalReloads / reloadRecords.length;

		console.log("Average reloads within 10 seconds:", averageReloads); // Debugging log
		res.json({ averageReloads: averageReloads.toFixed(2) });
	} catch (err) {
		console.error("Error fetching average reloads in 10 seconds:", err);
		res.status(500).send("Fout bij het ophalen van het gemiddelde.");
	}
});
app.get("/percentage-clear-button", async (req, res) => {
	try {
		const database = client.db("Dev5");
		const collection = database.collection("UserActions");

		// Haal de documenten op waar de eerste knop "clear-button" is
		const usersWhoClickedClearButton = await collection.find({ firstButtonClicked: "clear-button" }).toArray();

		// Haal het totaal aantal unieke gebruikers (userId)
		const totalUsersCount = await collection.distinct("_id");

		console.log("Aantal gebruikers die de clear-button klikten:", usersWhoClickedClearButton.length);
		console.log("Aantal totaal unieke gebruikers:", totalUsersCount.length);

		// Bereken het percentage van gebruikers die de "clear-button" hebben geklikt
		const percentage = totalUsersCount.length === 0 ? 0 : Math.round((usersWhoClickedClearButton.length / totalUsersCount.length) * 100);
		console.log("Percentage van gebruikers die de clear-button klikten:", percentage);

		// Stuur het percentage als antwoord
		res.json({ percentage });
	} catch (err) {
		console.error("Error fetching percentage clear button users:", err);
		res.status(500).send("Fout bij het ophalen van het percentage.");
	}
});
