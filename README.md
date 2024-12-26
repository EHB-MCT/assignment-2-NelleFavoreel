# DEV5

Belang van een goede en snelle website. 

Deze eenvoudige applicatie benadrukt het belang van het creëren van een snelle en gebruiksvriendelijke website. Het demonstreert hoe cruciaal het is om zowel de prestaties als de functionaliteit te optimaliseren. De applicatie volgt en registreert gebruikersinteracties, wat het mogelijk maakt om inzicht te krijgen in het gebruiksgedrag en de algehele efficiëntie van de site. Een snelle en goed geoptimaliseerde website draagt bij aan een betere gebruikerservaring en verhoogde betrokkenheid.

## Installation Frontend

1. Clone het repository:
   ```bash
   git clone https://github.com/EHB-MCT/assignment-2-NelleFavoreel.git
   ```
2. Navigeer naar de projectmap:
   ```bash
   cd frontend
   ```
3. Installeer de afhankelijkheden:
   ```bash
   npm install
   ```
4. Start de applicatie:
   ```bash
   npm start
   ```
5. De applicatie is nu te bereiken op `http://localhost:3000`.

## Installation Backend

1. Navigeer naar de projectmap:
   ```bash
   cd backend
   ```
2. Installeer de afhankelijkheden:
   ```bash
   npm install
   ```
3. Start de applicatie:
   ```bash
   node index.js
   ```
4. De backend is nu te bereiken via http://localhost:3001 (of afhankelijk van de backendconfiguratie, pas de URL aan als nodig).

## Usage

Wanneer je de applicatie opent, wordt je naar het home-scherm geleid, waar je via de navigatie naar Data en ShowData kunt gaan.

- Data: Bij het klikken op de "Data"-knop kom je op een laadscherm terecht. Hier wordt gemeten hoe snel gebruikers op de "Reload"-knop kunnen klikken. Deze interacties worden getrackt en opgeslagen in een MongoDB-database. Nadat de "Reload"-actie is uitgevoerd, kom je op een scherm met drie knoppen. Dit scherm registreert welke knop gebruikers het snelst aanklikken, en ook deze data wordt naar de database gestuurd.

- ShowData: Wanneer je op de "ShowData"-knop klikt, krijg je een scherm te zien waarop de verzamelde data visueel wordt weergegeven. Deze weergave is ontworpen om de trackinggegevens op een informele en begrijpelijke manier te tonen.

## Technologieën en bibliotheken

- **React**: Voor de gebruikersinterface.
- **useState, useEffect (React hooks)**: Voor statusbeheer en effectafhandeling.
- **fetch API**: Om gegevens naar de server te versturen.
- **npm**: Voor dependency management en het starten van de applicatie.
- **MongoDB**: voor de data op te slaan in een database
 - **Express**: voor de backend te runnen

## Database endpoints
### POST /data
Voegt nieuwe trackingdata toe aan de database.

Dit endpoint ontvangt de volgende gegevens en slaat deze op in de database:
- **action**: De uitgevoerde actie (bijvoorbeeld "reload" of "button-click").
- **elapsedTime**: De verstreken tijd in seconden vanaf het begin van de interactie.
- **timestamp**: De tijd waarop de actie werd uitgevoerd.
- **reloadCount**: Aantal keren dat de **reload**-knop is ingedrukt.
- **reloadFirstClickTime**: De tijd die verstreken is totdat de eerste **reload**-klik plaatsvond.
- **firstButtonClicked**: De naam van de eerste knop die werd aangeklikt.

### GET/data
Haalt verzamelde data op

## Bronnen
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [React documentation](https://www.mongodb.com/resources/languages/express-mongodb-rest-api-tutorial)
- [Tutorial mongoDB + express](https://kinsta.com/nl/blog/mongodb-database-aanmaken/)
- [Gids voor monogDB](https://www.npmjs.com/package/websocket-express)
- [React verbinden MongoDB](https://www.geeksforgeeks.org/how-to-connect-mongodb-with-reactjs/ )
## License

[MIT](https://choosealicense.com/licenses/mit/)
![image](https://github.com/user-attachments/assets/0d009c7e-af3c-4bd2-9b95-c3fc928dd7b7)
