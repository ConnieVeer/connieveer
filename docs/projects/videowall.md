# 🌬️ Realtime Videowall voor Windparken in Nederland

![Dashboard Mockup](./assets/mockup-dashboard.png)

## 🎯 Doel
Een dynamische visuele tool om live gegevens van windparken in Nederland te tonen op een videowall, met realtime productie-informatie en interactieve visualisaties.

## 👨‍💻 Mijn Rol
Fullstack developer met focus op datavisualisatie en dataverwerking. Ontworpen en gebouwd in opdracht van een energiebedrijf.

---

## 🔍 Functionaliteiten

- **Kaartweergave** met automatische loop langs alle windparken.
- **Windroos** per park (zie voorbeeld hieronder).
- **Teller** met rekenende animatie voor totaal opgewekte energie.
- **Realtime meters** voor huidig vermogen per park.
- **Live data** via API uit GreenByte-platform.

---

## 🧠 Dataverwerking

- **Bron**: REST API (GreenByte)
- **Data**: Parknaam, vermogen, windsnelheid/-richting, status turbine
- **Verwerking**: polling en caching per interval, transformatie per park
- **Visualisatie**: via D3.js in custom React-componenten

---

## 📊 Voorbeeld Visuals

| Windroos                                  | Gauge Meter                                 |
|------------------------------------------|---------------------------------------------|
| ![Windroos](./assets/windrose-example.png) | ![Gauge](./assets/gauge-meter-example.png)  |

---

## ⚙️ Stack

- **Frontend**: React, D3.js
- **Backend**: REST API integratie (Breeze)
- **Visualisatie**: Custom SVG, D3, CSS-animaties

---

## ✅ Resultaat
Het dashboard biedt een aantrekkelijke manier voor publieke communicatie van energieprestaties. Het project is schaalbaar, uitbreidbaar en goed inzetbaar als basis voor latere BI-rapportages.

---

## 📌 Disclaimer
Code is eigendom van opdrachtgever en wordt hier niet gedeeld. Dit project dient ter illustratie van mijn rol en ervaring.
