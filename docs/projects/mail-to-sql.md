# 📬 Energiecoach-aanvragen Extract & Load Pipeline

## 🔧 Doel
Het extraheren van energiecoach-aanvragen uit een mailbox om deze over te zetten naar de Hoom-database van Energie van Hengelo.

## 📁 Overzicht
Dit project bevat een eenvoudige, herbruikbare ETL-pipeline in Python die:

Een mailbox-export in XML-formaat verwerkt
Belangrijke aanvraaggegevens (zoals naam, adres, motivatie) structureert
Foutieve of dubbele inzendingen filtert
De geschoonde data klaarmaakt voor bulkimport in de Hoom-database

## ⚙️ Technologieën
Python 3.9+
xml.etree.ElementTree – XML-parsing
pandas – datatransformatie en filtering
sqlalchemy of psycopg2 – DB-connectie (optioneel)
Logging & CLI-interface
## 📐 Architectuur
<pre class="mermaid">
flowchart TD
    A[Energiecoaches Outlook Inbox] --> B[Exporteren van e-mails]
    B --> C[Import & parsing in Python]
    C --> D[Opschonen van ruwe data]
    D --> E[Filteren op relevante aanvragen]
    E --> F[Wegschrijven naar CSV-bestand]
    F --> G[Importeren in Hoom-database]
    G -. Delay .-> H[Connectie met Hoom niet<br>direct beschikbaar (EVH)]

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



Naam	Adres	E-mail	Aanmeldingsdatum	Bericht
Jan Jansen	Leliestraat 12	jan@email.nl	2023-11-10	IK wil graag een energiecoach
Aisha de Vries	Deurningerstraat 4	aisha@outlook.com	2023-11-10	Ik heb een vraag voor een energiecoach
## 🚩 Lessons Learned
Inbox-structuur in XML verschilt per exporttype → flexibel parsen nodig
Inconsistentie in gebruikersinvoer vroeg om robuuste validatie
Hoom-database structuur vereist veldmapping en normalisatie
##📌 Status
✅ Proof-of-concept geïmplementeerd en gebruikt voor meer dan 100 aanvragen
🛠️ Klaar om uit te breiden naar webhook- of formulierautomatisering
<script type="module">
	import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
	mermaid.initialize({
		startOnLoad: true
	});
</script>