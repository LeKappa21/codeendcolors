const express = require('express');
const sequelize = require('./services/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // per leggere JSON nel body delle richieste

// Route di test
app.get('/', (req, res) => {
  res.send('🚀 API attive e funzionanti!');
});

// Avvio app
async function startApp() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connesso a PostgreSQL');

    app.listen(PORT, () => {
      console.log(`🚀 Server avviato su http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Errore:', error);
  }
}

startApp();
