# DEV5

Belang van een goede en snelle website.

Deze eenvoudige applicatie benadrukt het belang van het creëren van een snelle en gebruiksvriendelijke website. Het demonstreert hoe cruciaal het is om zowel de prestaties als de functionaliteit te optimaliseren. De applicatie volgt en registreert gebruikersinteracties, wat het mogelijk maakt om inzicht te krijgen in het gebruiksgedrag en de algehele efficiëntie van de site. Een snelle en goed geoptimaliseerde website draagt bij aan een betere gebruikerservaring en verhoogde betrokkenheid.

## Tabel of contents

- [Installatie Frontend](#installatie-frontend)
- [Installatie Backend](#installatie-backend)
- [Projectstructuur](#projectstructuur)
- [Werking](#werking)
- [Conventies](#conventies)
- [Style Guide](#style-guide)
- [Technologieën en Bibliotheken](#technologieën-en-bibliotheken)
- [Bronnen](#bronnen)
- [Licentie](#licentie)
- [Auteur](#auteur)

## Installatie Frontend

Zorg dat je **Node.js** en **npm** geïnstalleerd hebt voordat je begint.

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

## Installatie Backend

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

## Project structuur

```bash

├── backend              # Backend-map voor server-gerelateerde code
│   ├── endpoints        # Bevat API-endpoints voor backend-functionaliteit
│   ├── node_modules     # NPM-afhankelijkheden voor de backend (automatisch gegenereerd)
│   ├── index.js         # Hoofdserverbestand voor de backend, start de server en handelt routing af
│   ├── package-lock.json # Specifieke versies van geïnstalleerde backend-pakketten
│   └── package.json     # Beschrijving van het backend-project en lijst met dependencies
├── frontend             # Frontend-map voor client-gerelateerde code
│   ├── node_modules     # NPM-afhankelijkheden voor de frontend (automatisch gegenereerd)
│   ├── public           # Statische bestanden zoals HTML, favicon, enz.
│   └── src              # Broncode voor de frontend-applicatie
│       ├── assets       # Bevat alle media, zoals afbeeldingen en video's
│       │   ├── images   # Afbeeldingen gebruikt in de frontend
│       │   └── videos   # Video's gebruikt in de frontend
│       ├── components   # Herbruikbare React-componenten voor de applicatie
│       ├── modules      # Styling- en andere modulegerelateerde bestanden
│       ├── pages        # Pagina-componenten voor de frontend-routing
│       ├── App.css      # CSS-styling voor de hoofd-applicatie
│       ├── App.js       # Hoofd-React-component van de applicatie
│       ├── App.test.js  # Testen voor de App-component
│       ├── index.css    # Globale CSS-styling
│       ├── index.js     # Ingangspunt van de frontend-toepassing
│       ├── logo.svg     # React-logo of andere project-gerelateerde logo's
│       ├── reportWebVitals.js # Prestatiebewaking voor de React-applicatie
│       └── setupTests.js # Configuratiebestand voor unit testing
├── .gitignore           # Bestanden en mappen die moeten worden genegeerd door Git
├── package-lock.json    # Specifieke versies van geïnstalleerde project-pakketten (frontend/backend)
├── package.json         # Beschrijving van het project, dependencies en scripts
├── README.md            # Documentatiebestand met informatie over het project
└── LICENSE              # Licentie voor het project
```

## Werking

Wanneer je de applicatie opent, wordt je naar het home-scherm geleid, waar je via de navigatie naar Data en ShowData kunt gaan.

- Data: Bij het klikken op de "Data"-knop kom je op een laadscherm terecht. Hier wordt gemeten hoe snel gebruikers op de "Reload"-knop kunnen klikken. Deze interacties worden getrackt en opgeslagen in een MongoDB-database. Nadat de "Reload"-actie is uitgevoerd, kom je op een scherm met drie knoppen. Dit scherm registreert welke knop gebruikers het snelst aanklikken, en ook deze data wordt naar de database gestuurd.

- ShowData: Wanneer je op de "ShowData"-knop klikt, krijg je een scherm te zien waarop de verzamelde data visueel wordt weergegeven. Deze weergave is ontworpen om de trackinggegevens op een informele en begrijpelijke manier te tonen.

## Conventions

### File names

- CSS/Styling: Gebruik kebab-case (bijv. main-styles.css).
- React Components: Gebruik PascalCase (bijv. Header.jsx, UserCard.jsx).

### Codeconventies

- Gebruik functionele React-componenten boven klassen-gebaseerde componenten.
- Houd componenten klein, herbruikbaar en overzichtelijk.
- Voeg duidelijke en informatieve comments toe.

## Style Guide

- HTML: follow the HTML standards
- CSS: follow the CSS standards
- Follow react best practices to structure your code

## Technologieën en bibliotheken

- **React**: Voor de gebruikersinterface.
- **useState, useEffect (React hooks)**: Voor statusbeheer en effectafhandeling.
- **fetch API**: Om gegevens naar de server te versturen.
- **npm**: Voor dependency management en het starten van de applicatie.
- **MongoDB**: voor de data op te slaan in een database
- **Express**: voor de backend te runnen

## Bronnen

- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [React documentation](https://www.mongodb.com/resources/languages/express-mongodb-rest-api-tutorial)
- [Tutorial mongoDB + express](https://kinsta.com/nl/blog/mongodb-database-aanmaken/)
- [Gids voor monogDB](https://www.npmjs.com/package/websocket-express)
- [React verbinden MongoDB](https://www.geeksforgeeks.org/how-to-connect-mongodb-with-reactjs/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

Nelle Favoreel
