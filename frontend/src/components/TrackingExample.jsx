import React, { useState, useEffect } from "react";

const TrackingExample = () => {
	// State om het laadscherm te beheren. 'true' betekent dat we in de laadstaat zitten.
	const [loading, setLoading] = useState(true);

	// Starttijd van de applicatie, voor het berekenen van verstreken tijd vanaf het laden.
	const [startTime, setStartTime] = useState(Date.now());

	// Houdt het aantal keren bij dat de gebruiker op de herlaadknop heeft geklikt.
	const [reloadCount, setReloadCount] = useState(0);

	// Bewaart de verstreken tijd vanaf de eerste klik op de herlaadknop (in seconden).
	const [reloadFirstClickTime, setReloadFirstClickTime] = useState(null);

	// Bewaart de naam van de eerste knop die door de gebruiker is ingedrukt.
	const [firstButtonClicked, setFirstButtonClicked] = useState("");

	// Logt alle gebruikeracties. Slaat reload acties en knopacties op in aparte arrays.
	const [logData, setLogData] = useState({
		reloadActions: [],
		buttonActions: [],
	});

	// Functie om een actie (zoals klikken of herladen) te loggen met de verstreken tijd en tijdstempel.
	const logAction = (action, data = {}) => {
		const elapsedTime = (Date.now() - startTime) / 1000; // Verstreken tijd in seconden.
		const actionData = {
			...data,
			action,
			elapsedTime,
			timestamp: new Date().toISOString(),
		};

		// Update de logData met de nieuwe actie
		setLogData((prevLog) => {
			const updatedLog = { ...prevLog };
			if (action === "reload") {
				updatedLog.reloadActions.push(actionData); // Voeg reload actie toe
			}
			if (action === "button-click") {
				updatedLog.buttonActions.push(actionData); // Voeg button klik actie toe
			}
			return updatedLog;
		});
	};

	// Deze functie wordt aangeroepen wanneer de gebruiker op de herlaadknop klikt.
	const handleReloadClick = () => {
		setReloadCount((prevCount) => {
			const newCount = prevCount + 1;

			// Als het de eerste klik is, sla de verstreken tijd sinds de eerste klik op.
			if (newCount === 1 && reloadFirstClickTime === null) {
				setReloadFirstClickTime((Date.now() - startTime) / 1000);
			}
			logAction("reload", { reloadCount: newCount }); // Log de reload actie
			return newCount;
		});
	};

	// Deze functie wordt aangeroepen wanneer een van de knoppen wordt aangeklikt.
	const handleButtonClick = (buttonName) => {
		if (!firstButtonClicked) {
			setFirstButtonClicked(buttonName); // Stel de naam van de eerste knop in.
			logAction("button-click", { firstButtonClicked: buttonName }); // Log de button klik actie
		}
	};

	// Herstart het proces, reset de status, verstuur gegevens en begin opnieuw met laden.
	const restartProcess = async () => {
		setLoading(true); // Begin opnieuw met laden zodra de herstartknop wordt ingedrukt
		logAction("restart", { reloadCount, reloadFirstClickTime, firstButtonClicked });

		// Verzamel gegevens die naar de server worden gestuurd, inclusief actiedetails
		const dataToSend = {
			action: "restart", // Zorg ervoor dat de actie is ingesteld
			elapsedTime: (Date.now() - startTime) / 1000, // Verstreken tijd in seconden
			timestamp: new Date().toISOString(), // Huidige tijdstempel
			reloadCount, // Aantal keren de herlaadknop werd ingedrukt
			reloadFirstClickTime, // Verstreken tijd bij de eerste klik op herlaad
			firstButtonClicked: firstButtonClicked || "", // De eerste aangeklikte knop
			reloadActions: logData.reloadActions, // Log van reload acties
			buttonActions: logData.buttonActions, // Log van knop actiedetails
		};

		console.log("Verstuurde data:", dataToSend); // Toon de gegevens die verzonden gaan worden

		// Verstuur de gegevens naar de server
		try {
			const response = await fetch("http://localhost:3001/data", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(dataToSend),
			});
			if (!response.ok) {
				console.error("Fout bij versturen van data");
			} else {
				console.log("Data succesvol verstuurd");
			}
		} catch (error) {
			console.error("Fout:", error); // Foutlog wanneer er een probleem is met de request
		}

		// Reset alle data en instellingen na het versturen van de gegevens
		setReloadCount(0); // Reset het aantal herlaadacties
		setReloadFirstClickTime(null); // Reset de tijd van de eerste klik op herlaad
		setFirstButtonClicked(""); // Reset de eerste knop die is geklikt
		setLogData({
			reloadActions: [],
			buttonActions: [],
		});

		// Herstart de applicatie na 10 seconden om opnieuw het laadscherm te tonen
		setTimeout(() => setLoading(false), 10000); // Stel 10 seconden in voor opnieuw laden
	};

	// Gebruik een useEffect hook om de applicatie een vertraging van 10 seconden te geven voor het laden
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 10000); // Simuleer 10 seconden laden
		return () => clearTimeout(timer); // Maak de timer schoon bij component demontage
	}, []);

	return (
		<div>
			{/* Render laadscherm als de state 'loading' waar is */}
			{loading ? (
				<div id="loading">
					<p>Loading... Please wait</p>
					{/* Klik op deze knop om het laden te herladen */}
					<button id="reload-button" onClick={handleReloadClick}>
						Reload
					</button>
				</div>
			) : (
				/* Render inhoudsscherm als de loading state 'false' is */
				<div id="content">
					<h2>Klik zo snel mogelijk op de button!</h2>
					{/* Knoppen die door de gebruiker geklikt kunnen worden */}
					<div>
						<button id="not-button" onClick={() => handleButtonClick("not-button")}>
							Ergens
						</button>
						<button id="underlined-button" onClick={() => handleButtonClick("underlined-button")}>
							is er
						</button>
						<button id="clear-button" onClick={() => handleButtonClick("clear-button")}>
							een button
						</button>
					</div>
					{/* Herstartknop die het proces opnieuw start */}
					<button id="restart-button" onClick={restartProcess}>
						Restart
					</button>
				</div>
			)}
		</div>
	);
};

export default TrackingExample;
