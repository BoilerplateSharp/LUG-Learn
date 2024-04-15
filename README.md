# LUG-Docs &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/2a09fb21-97e2-4c63-9f73-acb6c9367c4c/deploy-status)](https://app.netlify.com/sites/lug-learn/deploys)

## Local Development

```shell
git clone URL
cd FOLDER
npm install # Installiert alle Abhängigkeiten
npm run dev # Startet den Dev-Server
```

## Testing with Dev-Container

tbd

## 🚀 Projektstruktur

Innerhalb des Projekts findest du die folgenden Ordner und Dateien:

```shell
.
├── astro.config.mjs # Astro Config Datei
├── package.json # Das Manifest des Projekts / "Lieferschein"
├── package-lock.json
├── public # Ordner für statische Dateien
│   └── favicon.svg # z.B. Ein Icon für die Registerkarte
├── README.md # Projektinformationen
├── src # Source-Code der Website
│   ├── components # Wiederverwendbare Komponenten
│   │   └── Card.astro
│   ├── env.d.ts # Definitionen für TypeScript Datentypen
│   ├── layouts # Templates/Vorlagen für die "pages"
│   │   └── Layout.astro # Die Standart-Vorlage
│   └── pages # URL-Mapped Webpages
│       └── index.astro
└── tsconfig.json # TypeScript Projekt-Config

6 directories, 10 files
```

Starlight sucht nach .md oder .mdx Dateien im Verzeichnis src/content/docs/. Jede Datei wird basierend auf ihrem Dateinamen als Route freigegeben.

Bilder können zu src/assets/ hinzugefügt und in Markdown mit einem relativen Link eingebettet werden.

Statische Ressourcen, wie Favicons, können im Verzeichnis public/ platziert werden.
🧞 Befehle

Alle Befehle werden vom Root des Projekts aus in einem Terminal ausgeführt:

|Befehl|Aktion|
|---|---|
|`npm install`|Installiert Abhängigkeiten|
|`npm run dev`|Startet den lokalen Entwicklungsserver unter `localhost:4321`|
|`npm run build`|Erstellt deine Produktionswebsite in `./dist/`|
|`npm run preview`|Vorschau deiner Build lokal vor dem Deployment|
|`npm run astro ...`|Führt CLI-Befehle wie `astro add`, `astro check` aus|
|`npm run astro -- --help`|Hilfe bei der Verwendung des Astro CLI|
