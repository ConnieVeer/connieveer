# 📬 Energiecoach-aanvragen Extract & Load Pipeline

## 🔧 Doel
Automatiseer het extraheren van energiecoach-aanvragen uit een mailbox en laad deze gestructureerd in de Hoom-database van Energie van Hengelo.

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
```mermaid
graph TD
    A["Mailbox-export (XML)"] --> B["Parse XML met Python"]
    B --> C["Opschonen & structureren met Pandas"]
    C --> D["Valideer & dedupliceer"]
    D --> E["Exporteer CSV en laad in Hoom DB"]

```
## 🗂️ Bestandsoverzicht
energiecoach-pipeline/
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
└── requirements.txt
##▶️ Gebruik
Plaats je XML-export in de data/-map
Run het script:
python src/main.py --input data/mailbox_export.xml --output output/energiecoach.csv
(Optioneel) Laad het CSV-bestand in Hoom via SQL 
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
