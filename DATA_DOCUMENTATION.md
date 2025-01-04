# Data Structuur Database

## MongoDB

De gegevens worden opgeslagen in een MongoDB-database. De verzameling waarin gegevens worden opgeslagen heet `UserActions`. Deze verzameling bevat de verschillende acties van de gebruiker die door de front-end worden geregistreerd en via API-verzoeken naar de backend worden gestuurd.

Elke invoer in de `UserActions` collectie bevat de volgende velden:

- **\_id** (automatisch gegenereerd door MongoDB): Unieke identificatie van het document.
- **action**: De uitgevoerde actie (bijvoorbeeld "reload", "button-click").
- **elapsedTime**: De verstreken tijd (in seconden) vanaf het begin van de interactie.
- **timestamp**: Het moment waarop de actie plaatsvond (tijdstempel).
- **reloadCount**: Het aantal keren dat de **reload**-knop is ingedrukt tijdens de sessie.
- **reloadFirstClickTime**: De tijd die verstreken is voordat de gebruiker de eerste **reload**-klik uitvoerde (in seconden).
- **firstButtonClicked**: De naam van de eerste knop die door de gebruiker werd aangeklikt (bijvoorbeeld "clear-button").

### Voorbeeld van een document in de MongoDB-collectie "UserActions":

```json
{
  "_id": ObjectId("60d3b41abd492a001f4e1d2d"),
  "action": "reload",
  "elapsedTime": 3.2,
  "timestamp": "2025-01-04T10:30:20Z",
  "reloadCount": 2,
  "reloadFirstClickTime": 1.8,
  "firstButtonClicked": "clear-button"
}
```

## Database Endpoints

### Post/data

Dit endpoint accepteert gegevens van de front-end en slaat ze op in de MongoDB-database in de verzameling UserActions.

```json
{
	"action": "reload",
	"elapsedTime": 3.2,
	"timestamp": "2025-01-04T10:30:20Z",
	"reloadCount": 2,
	"reloadFirstClickTime": 1.8,
	"firstButtonClicked": "clear-button"
}
```

Uitleg van de velden

- **action**: De uitgevoerde actie (bijvoorbeeld "reload" of "button-click").
- **elapsedTime**: De verstreken tijd in seconden vanaf het begin van de interactie.
- **timestamp**: De tijd waarop de actie werd uitgevoerd.
- **reloadCount**: Aantal keren dat de **reload**-knop is ingedrukt.
- **reloadFirstClickTime**: De tijd die verstreken is totdat de eerste **reload**-klik plaatsvond.
- **firstButtonClicked**: De naam van de eerste knop die werd aangeklikt.

### Get/data

Dit endpoint haalt de verzamelde gegevens op uit de MongoDB-database. Het retourneert een lijst van alle acties die door gebruikers zijn uitgevoerd.

Voorbeeld:

```json
[
	{
		"_id": "60d3b41abd492a001f4e1d2d",
		"action": "reload",
		"elapsedTime": 3.2,
		"timestamp": "2025-01-04T10:30:20Z",
		"reloadCount": 2,
		"reloadFirstClickTime": 1.8,
		"firstButtonClicked": "clear-button"
	},
	{
		"_id": "60d3b41abd492a001f4e1d3e",
		"action": "button-click",
		"elapsedTime": 2.5,
		"timestamp": "2025-01-04T10:31:00Z",
		"reloadCount": 1,
		"reloadFirstClickTime": 2.1,
		"firstButtonClicked": "underlined-button"
	}
]
```

### GET/reaload-persentage

Dit endpoint berekent en retourneert het percentage van gebruikers die de pagina opnieuw hebben geladen.

### GET /reload-within-5-seconds

Dit endpoint berekent het percentage van gebruikers die de pagina binnen 5 seconden na hun eerste klik hebben herladen.

### GET /average-reload-in-10-seconds

Dit endpoint berekent het gemiddelde aantal keren dat de reload-knop is ingedrukt binnen 10 seconden van het eerste gebruik.

### GET /percentage-clear-button

Dit endpoint berekent het percentage van gebruikers die de clear-button hebben geklikt.

### GET /percentage-buttons

Dit endpoint berekent het aantal klikken per knop en geeft de gegevens per knop weer.
