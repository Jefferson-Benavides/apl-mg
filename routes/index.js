const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.sendFile('public/dashboard.html', { root: __dirname + '/../' });
});

router.get('/lotes', (req, res) => {
  res.send('<h1>Actualmente en desarrollo. Próximamente estará disponible este módulo</h1><a href="/dashboard">Regresar al Dashboard</a>');
});

router.get('/asambleas', (req, res) => {
  res.send('<h1>Actualmente en desarrollo. Próximamente estará disponible este módulo</h1><a href="/dashboard">Regresar al Dashboard</a>');
});

router.get('/cuotas', (req, res) => {
  res.send('<h1>Actualmente en desarrollo. Próximamente estará disponible este módulo</h1><a href="/dashboard">Regresar al Dashboard</a>');
});

module.exports = router;
