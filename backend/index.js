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
		strict: true,
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
