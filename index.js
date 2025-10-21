const express = require('express');
const cors = require('cors');
const sequelize = require('./services/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Abilita CORS per tutte le richieste
app.use(express.json()); // per leggere JSON nel body delle richieste

// Route di test
app.get('/', (req, res) => {
  res.send('🚀 API attive e funzionanti!');
});

// API Endpoint per i progetti
app.get('/api/projects', (req, res) => {
  // Per ora restituiamo dati mock, poi potrai collegarli al database
  const projects = [
    {
      id: 1,
      title: 'Bartop Retro',
      description: 'Cabinato in stile retrò con grafica personalizzata e pulsanti LED.',
      image: 'https://madeforarcade.com/wp-content/uploads/2022/05/bartop.webp'
    },
    {
      id: 2,
      title: 'Mini Arcade',
      description: 'Versione compatta per piccoli spazi, perfetto per i nostalgici.',
      image: 'https://i.ebayimg.com/images/g/PIoAAOSw2JRl~b1L/s-l1600.webp'
    },
    {
      id: 3,
      title: 'Custom Full Size',
      description: 'Cabinato full-size per esperienze arcade complete e immersive.',
      image: 'https://media.gqitalia.it/photos/6065e1797e700acff2f6451c/16:9/w_2560%2Cc_limit/IIRCADE-KICKSTARTER-GFX39-1.jpg'
    }
  ];
  res.json(projects);
});

// API Endpoint per inviare messaggi dal form contatti
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validazione base
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Tutti i campi sono obbligatori'
      });
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Email non valida'
      });
    }

    // Per ora log in console, poi salveremo nel database
    console.log('📧 Nuovo messaggio ricevuto:');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Messaggio:', message);

    // TODO: Salvare nel database
    // await Message.create({ name, email, message });

    res.json({
      success: true,
      message: 'Messaggio inviato con successo! Ti contatteremo presto.'
    });
  } catch (error) {
    console.error('Errore invio messaggio:', error);
    res.status(500).json({
      success: false,
      error: 'Errore del server, riprova più tardi'
    });
  }
});

// API Endpoint per ottenere info team
app.get('/api/team', (req, res) => {
  const team = [
    {
      id: 1,
      name: 'Kevin Rossi',
      role: 'Front-End Developer',
      description: 'Appassionato di interfacce pulite e funzionali, specializzato in Vue.js e UI design.',
      image: 'https://i.postimg.cc/W3GkGzQ2/profile-demo.jpg'
    },
    {
      id: 2,
      name: 'Luca Bianchi',
      role: 'Back-End Engineer',
      description: 'Ama l\'architettura software e costruire sistemi scalabili, sicuri e performanti.',
      image: 'https://i.postimg.cc/Dyf4dZL6/avatar-2.jpg'
    },
    {
      id: 3,
      name: 'Sara Verdi',
      role: 'Graphic Designer',
      description: 'Unisce estetica e funzionalità per dare forma visiva a ogni progetto digitale.',
      image: 'https://i.postimg.cc/fbByPbDs/avatar-3.jpg'
    }
  ];
  res.json(team);
});

// Avvio app
async function startApp() {
  try {
    // Prova a connettersi al database, ma continua anche se fallisce
    if (process.env.POSTGRES_DB) {
      try {
        await sequelize.authenticate();
        console.log('✅ Connesso a PostgreSQL');
      } catch (dbError) {
        console.warn('⚠️  Database non disponibile, usando dati mock');
        console.warn('   Per usare il database, configura le variabili d\'ambiente o avvia con Docker');
      }
    } else {
      console.log('ℹ️  Nessun database configurato, usando dati mock');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server avviato su http://localhost:${PORT}`);
      console.log(`📡 API disponibili:`);
      console.log(`   GET  http://localhost:${PORT}/api/projects`);
      console.log(`   GET  http://localhost:${PORT}/api/team`);
      console.log(`   POST http://localhost:${PORT}/api/contact`);
    });
  } catch (error) {
    console.error('❌ Errore fatale:', error);
    process.exit(1);
  }
}

startApp();
