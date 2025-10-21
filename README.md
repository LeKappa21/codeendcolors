# Code and Colors 🎨

Sito web per la vendita di cabinati arcade personalizzati con sistema RetroPie preinstallato.

## 📋 Indice

- [Descrizione del Progetto](#descrizione-del-progetto)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Struttura del Progetto](#struttura-del-progetto)
- [Prerequisiti](#prerequisiti)
- [Installazione](#installazione)
- [Avvio con Docker](#avvio-con-docker)
- [Avvio in Sviluppo (senza Docker)](#avvio-in-sviluppo-senza-docker)
- [Build per Produzione](#build-per-produzione)
- [Database](#database)
- [Comandi Utili](#comandi-utili)
- [Struttura Database](#struttura-database)

## 📖 Descrizione del Progetto

**Code and Colors** è un'applicazione web moderna per la presentazione e vendita di cabinati arcade personalizzati. Il sito include:

- 🎮 **Homepage** con slider interattivo e sezioni informative
- 👥 **Chi Siamo** - presentazione del team
- 🕹️ **Progetti** - showcase dei cabinati realizzati
- 📧 **Contatti** - form per richiedere informazioni e preventivi

## 🛠 Tecnologie Utilizzate

### Frontend
- **Vue.js 3** - Framework JavaScript reattivo
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool ultra-veloce
- **Bootstrap 5** - Framework CSS responsive
- **Swiper** - Slider/carousel moderno
- **Vue Router** - Routing per SPA

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Web framework
- **Sequelize** - ORM per database
- **PostgreSQL** - Database relazionale

### DevOps
- **Docker** - Containerizzazione
- **Docker Compose** - Orchestrazione multi-container

## 📁 Struttura del Progetto

```
codeendcolors/
├── frontend/
│   └── frontend/
│       ├── src/
│       │   ├── components/     # Componenti riutilizzabili
│       │   │   ├── navbar.vue
│       │   │   └── footer.vue
│       │   ├── pages/          # Pagine dell'applicazione
│       │   │   ├── HomePage.vue
│       │   │   ├── about.vue
│       │   │   ├── Project.vue
│       │   │   └── Contatti.vue
│       │   ├── App.vue
│       │   └── main.ts
│       ├── public/
│       │   └── images/         # Immagini pubbliche
│       ├── package.json
│       └── vite.config.ts
├── models/                     # Modelli database (Sequelize)
├── services/                   # Servizi backend
│   └── db.js                  # Configurazione database
├── index.js                    # Entry point backend
├── docker-compose.yml          # Configurazione Docker Compose
├── Dockerfile                  # Dockerfile backend
├── package.json               # Dipendenze backend
└── README.md
```

## ✅ Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** >= 18.x
- **npm** >= 9.x
- **Docker** >= 20.x (opzionale, per Docker)
- **Docker Compose** >= 2.x (opzionale, per Docker)

### Verifica versioni installate:

```bash
node --version
npm --version
docker --version
docker-compose --version
```

## 🚀 Installazione

### 1. Clona il repository

```bash
git clone <url-repository>
cd codeendcolors
```

### 2. Installa le dipendenze

#### Backend
```bash
npm install
```

#### Frontend
```bash
cd frontend/frontend
npm install
cd ../..
```

## 🐳 Avvio con Docker

Il modo più semplice per avviare l'intero stack (backend + database PostgreSQL).

### 1. Avvia tutti i servizi

```bash
docker-compose up -d
```

Questo comando:
- ✅ Costruisce l'immagine Docker del backend
- ✅ Avvia il container PostgreSQL
- ✅ Avvia il container del backend Express
- ✅ Configura automaticamente la rete e i volumi

### 2. Verifica che i container siano attivi

```bash
docker-compose ps
```

Dovresti vedere:
```
NAME                IMAGE               STATUS
codeendcolors-app   codeendcolors-app   Up
codeendcolors-db    postgres:15         Up
```

### 3. Visualizza i log

```bash
# Tutti i servizi
docker-compose logs -f

# Solo backend
docker-compose logs -f app

# Solo database
docker-compose logs -f db
```

### 4. Ferma i servizi

```bash
docker-compose down
```

Per fermare E rimuovere i volumi (attenzione: elimina i dati del database):
```bash
docker-compose down -v
```

## 💻 Avvio in Sviluppo (senza Docker)

### 1. Avvia PostgreSQL localmente

Se hai PostgreSQL installato localmente:

```bash
# Crea il database
createdb midb

# Oppure usa psql
psql -U postgres
CREATE DATABASE midb;
```

### 2. Configura le variabili d'ambiente

Crea un file `.env` nella root del progetto:

```env
POSTGRES_USER=utente
POSTGRES_PASSWORD=password
POSTGRES_DB=midb
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

### 3. Avvia il Backend

```bash
# Dalla root del progetto
node index.js
```

Il backend sarà disponibile su: `http://localhost:3000`

### 4. Avvia il Frontend

In un nuovo terminale:

```bash
cd frontend/frontend
npm run dev
```

Il frontend sarà disponibile su: `http://localhost:5173`

## 🏗 Build per Produzione

### Frontend

```bash
cd frontend/frontend
npm run build
```

I file compilati saranno in `frontend/frontend/dist/`

### Preview della build

```bash
cd frontend/frontend
npm run preview
```

## 🗄 Database

### Configurazione Docker

Il database PostgreSQL è configurato in `docker-compose.yml`:

- **Host**: `db` (interno a Docker) / `localhost` (esterno)
- **Porta esterna**: `55432` (mappata su `5432` interno)
- **Database**: `midb`
- **User**: `utente`
- **Password**: `password`

### Connessione al Database

#### Da fuori Docker

```bash
psql -h localhost -p 55432 -U utente -d midb
```

#### Da dentro Docker

```bash
docker-compose exec db psql -U utente -d midb
```

### Backup del Database

```bash
docker-compose exec db pg_dump -U utente midb > backup.sql
```

### Ripristino del Database

```bash
docker-compose exec -T db psql -U utente midb < backup.sql
```

## 📝 Comandi Utili

### Docker

```bash
# Ricostruisci i container
docker-compose up -d --build

# Riavvia un singolo servizio
docker-compose restart app

# Accedi al container del backend
docker-compose exec app sh

# Accedi al container del database
docker-compose exec db bash

# Pulisci tutto (container, volumi, immagini)
docker-compose down -v
docker system prune -a
```

### Frontend

```bash
cd frontend/frontend

# Sviluppo
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Type check
npm run type-check
```

### Backend

```bash
# Avvio normale
node index.js

# Avvio con nodemon (auto-reload)
npx nodemon index.js
```

## 📊 Struttura Database

Il database PostgreSQL include le seguenti tabelle (gestite da Sequelize):

- **Users** - Utenti del sistema
- **Products** - Cabinati arcade
- **Orders** - Ordini
- **Messages** - Messaggi dal form contatti

*(Verifica i modelli nella cartella `models/` per i dettagli)*

## 🌐 URL di Accesso

### Con Docker

- **Frontend**: Avvia manualmente con `npm run dev` → `http://localhost:5173`
- **Backend API**: `http://localhost:3001`
- **PostgreSQL**: `localhost:55432`

### Senza Docker

- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:3000`
- **PostgreSQL**: `localhost:5432` (se installato localmente)

## 🎨 Personalizzazione

### Colori del tema

I colori principali sono definiti nei file Vue:

- **Blu principale**: `#1e3c72`, `#2a5298`, `#3f6eb8`
- **Giallo/Arancione**: `#ffc107`, `#ff9800`
- **Rosso**: `#ff3b3b`

### Immagini

Aggiungi le tue immagini in `frontend/frontend/public/images/`

## 🐛 Troubleshooting

### Errore: Porta già in uso

Se ricevi un errore di porta già in uso:

```bash
# Trova il processo sulla porta 3001
lsof -i :3001

# Termina il processo
kill -9 <PID>
```

### Errore: Cannot connect to database

Verifica che PostgreSQL sia avviato:

```bash
docker-compose ps
```

Se il container `db` non è attivo:

```bash
docker-compose up -d db
```

### Frontend non si connette al backend

Verifica le variabili d'ambiente e che il backend sia in ascolto sulla porta corretta.

## 📄 Licenza

Questo progetto è privato. Tutti i diritti riservati.

## 👨‍💻 Autori

**Code and Colors Team**
- Kevin Rossi - Front-End Developer
- Luca Bianchi - Back-End Engineer
- Sara Verdi - Graphic Designer

---

**Ultimo aggiornamento**: Ottobre 2025

Per domande o supporto, contattaci tramite il form sul sito o via email: info@codeandcolors.it
