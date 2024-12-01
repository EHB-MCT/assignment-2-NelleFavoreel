import React, { useState, useEffect } from "react";

const TrackingExample = () => {
	const [loading, setLoading] = useState(true); // Voor het laadscherm
	const [startTime, setStartTime] = useState(Date.now()); // Starttijd
	const [reloadCount, setReloadCount] = useState(0); // Telling van herlaadknoppen
	const [reloadFirstClickTime, setReloadFirstClickTime] = useState(null); // Tijd van eerste klik
	const [firstButtonClicked, setFirstButtonClicked] = useState(""); // Eerste knopnaam
	const [logData, setLogData] = useState({
		reloadActions: [],
		buttonActions: [],
	});

	// Functie om acties te loggen
	const logAction = (action, data = {}) => {
		const elapsedTime = (Date.now() - startTime) / 1000; // Tijd in seconden
		const actionData = {
			...data,
			action,
			elapsedTime,
			timestamp: new Date().toISOString(),
		};

		setLogData((prevLog) => {
			const updatedLog = { ...prevLog };
			if (action === "reload") {
				updatedLog.reloadActions.push(actionData);
			}
			if (action === "button-click") {
				updatedLog.buttonActions.push(actionData);
			}
			return updatedLog;
		});
	};

	// Herladen knop loggen
	const handleReloadClick = () => {
		setReloadCount((prevCount) => {
			const newCount = prevCount + 1;
			if (newCount === 1 && reloadFirstClickTime === null) {
				setReloadFirstClickTime((Date.now() - startTime) / 1000);
			}
			logAction("reload", { reloadCount: newCount });
			return newCount;
		});
	};

	// Functie voor knoppen
	const handleButtonClick = (buttonName) => {
		if (!firstButtonClicked) {
			setFirstButtonClicked(buttonName);
			logAction("button-click", { firstButtonClicked: buttonName });
		}
	};

	// Proces opnieuw starten
	const restartProcess = async () => {
		logAction("restart", { reloadCount, reloadFirstClickTime, firstButtonClicked });

		const dataToSend = {
			action: "restart", // Zorg ervoor dat de actie wordt ingesteld
			elapsedTime: (Date.now() - startTime) / 1000, // Bereken de verstreken tijd in seconden
			timestamp: new Date().toISOString(), // Voeg de huidige tijdstempel toe
			reloadCount, // Aantal herlaadacties
			reloadFirstClickTime, // Tijd van de eerste klik op de herlaadknop
			firstButtonClicked: firstButtonClicked || "", // Voorkom null waarden
			reloadActions: logData.reloadActions, // Verzamel reload actiedetails
			buttonActions: logData.buttonActions, // Verzamel knop actiedetails
		};

		console.log("Verstuurde data:", dataToSend);

		// Eventueel data versturen naar een server
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
			console.error("Fout:", error);
		}

		// Reset alles met de setter functies van React
		setReloadCount(0); // Reset de reload count
		setReloadFirstClickTime(null); // Reset de tijd van de eerste klik op reload
		setFirstButtonClicked(""); // Reset de eerste knop die geklikt is
		setLogData({
			reloadActions: [],
			buttonActions: [],
		});

		setTimeout(() => setLoading(false), 10000); // Start opnieuw met laden
	};

	// Simuleer laden (10 seconden vertraging)
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 10000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			{loading ? (
				<div id="loading">
					<p>Loading... Please wait</p>
					<button id="reload-button" onClick={handleReloadClick}>
						Reload
					</button>
				</div>
			) : (
				<div id="content">
					<h2>Klik zo snel mogelijk op de button!</h2>
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
					<button id="restart-button" onClick={restartProcess}>
						Restart
					</button>
				</div>
			)}
		</div>
	);
};

export default TrackingExample;
