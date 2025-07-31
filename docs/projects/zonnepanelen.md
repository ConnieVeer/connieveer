
#  Overzicht van zonnepanelen in de wijk Hasseler Es

## 🔧 Doel
Inzicht krijgen in de hoeveelhied zonnepanelen in de buurten van de Hasseler Es om dit onderling inzichteljk te krijgen
## 📁 Overzicht
Zonnestroom; vermogen zonnepanelen woningen, wijken en buurten, 2016-2022 , openbare dat bronnen van het CBS, gefilters op gemeente Hengelo
Wijk- en buurtkaart 2023 van het CBS, de file bevat geometrien die ndoig zijn voor de kaart weergave

## ⚙️ Technologieën
GIS
SQL
Meta base
##stappen
CBS Data verzamelen

Zonnepanelen per buurt per jaar (2016–2022).

Geometrieën van wijken en buurten 2025.

Data voorbereiden

Filter op Hengelo.

CSV’s per jaar maken of in één bestand houden met een jaar-kolom.

QGIS

Laad geometrie + CSV in QGIS.

Joinen op buurtcode.

Visualiseren met gegradueerde symbologie.

Kaart maken

Begin met 1 jaar.

Exporteren als afbeelding met titel, legenda en schaalbalk.

Verbetering

Atlasfunctie of tijdserie/animatie voor meerdere jaren automatisch genereren.

## 📐 Architectuur
<pre class="mermaid">
flowchart TD
    A[CSV files zonnestroom ] --> B[Samenvoegen tot 1 CSV file]
    B --> C[]

  A1[geometrie data] --> B1[inladen in QGIS]-->C1 [ filteren op buurten in onze wijk]
  
  B1 --> C[koppelen van zonnestroom csv en geometrien, koppelen op buurt code
    C --> D[Opschonen van ruwe data]
    D --> E[Filteren op relevante aanvragen]
    E --> F[Wegschrijven naar CSV-bestand]
    F --> G["Importeren gegevens in Hoom-database (Later)"]
  

    style A fill:#e3f2fd,stroke:#2196f3,stroke-width:2px
    style B fill:#f1f8e9,stroke:#8bc34a,stroke-width:2px
    style C fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    style D fill:#ffe0b2,stroke:#fb8c00,stroke-width:2px
    style E fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
    style F fill:#e0f7fa,stroke:#00acc1,stroke-width:2px
    style G fill:#ede7f6,stroke:#673ab7,stroke-width:2px
    style H fill:#ffcdd2,stroke:#e53935,stroke-width:2px,stroke-dasharray: 5 5
</pre>

## 🚩 Lessons Learned
Inbox-structuur in CSV is niet echt consistent → flexibel parsen nodig
Inconsistentie in gebruikersinvoer vroeg om robuuste validatie
Hoom-database structuur vereist veldmapping en normalisatie
<!-- ##📌 Status
✅ Proof-of-concept geïmplementeerd en gebruikt voor meer dan 100 aanvragen
🛠️ Klaar om uit te breiden naar webhook- of formulierautomatisering -->
<script type="module">
	import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
	mermaid.initialize({
		startOnLoad: true
	});
</script>

