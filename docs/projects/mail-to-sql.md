#  Extract & Load Pipeline voor mailbox van Energie-coaches

## 🔧 Doel
Het extraheren van energiecoach-aanvragen uit een mailbox om deze over te zetten naar de Hoom-database van Energie van Hengelo.

## 📁 Overzicht
Dit project bevat een eenvoudige, ETL-pipeline in Python die:

Een mailbox-export in CSV-formaat verwerkt
Belangrijke aanvraaggegevens (zoals naam, adres, bericht) extraheert en strucureerd
Foutieve of dubbele inzendingen filtert
De geschoonde data klaarmaakt voor bulkimport in de Hoom-database. Dit kan ook in 1 keer, maar de verbindings gegevens voor de Hoom database waren nog niet bekend op het moment van verwerking. Daarom worden de gegevens eerst opgelslagen in een CSV bestand.

## ⚙️ Technologieën
Python 3.9+
Pandas – inlezen, opschonen, transformeren en analyseren van de mail data
SQLAlchemy - importeren van de csv gegevens in de Hoom database
## 📐 Architectuur
<pre class="mermaid">
flowchart TD
    A[Energiecoaches Outlook Inbox] --> B[Exporteren van e-mails]
    B --> C[Import & parsing in Python]
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
## 🗂️ Bestandsoverzicht
<!-- energiecoach-pipeline/
├── src/
│   ├── parse_xml.py         # Extract en parse XML-bestanden
│   ├── transform.py         # Structureren, opschonen, deduplicatie
│   ├── load.py              # Database-laag of export naar CSV
│   └── config.py            # Padinstellingen, mapping, log-niveau
├── data/
│   └── export_stations.xml  # Voorbeeldmailbox-export
├── output/
│   └── energiecoach.csv      # Gevalideerde, schone dataset
├── README.md
└── requirements.txt -->
<!-- ##▶️ Gebruik
Plaats je XML-export in de data/-map
Run het script:
python src/main.py --input data/mailbox_export.xml --output output/energiecoach.csv
(Optioneel) Laad het CSV-bestand in Hoom via SQL  -->
## 💡 Voorbeeldoutput

| Naam    | Adres |  Postcode  | Plaats | Emailadres | Datum ontvangen| Bericht|
| -------- | ------- |-------- | ------- |-------- | ------- |-------- |
| Jan Jansen  | Leliestraat 12  | 7551ST | Hengelo| jan@email.nl| 2023-10-11| IK wil graag een energiecoach|
| A. de Vries | Deurningerstraat 4    | 7555PF | Hengelo| aisha@outlook.com| 20123-10-11| informatie over zonnepanelen|


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