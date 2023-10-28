const express = require('express');
const router = express.Router();
const client = require('../app').client;
const dbName = 'apl';

router.get('/', (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('asociados');
  collection.find({}).toArray((err, docs) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en la base de datos.');
    } else {
      res.render('asociados', { asociados: docs });
    }
  });
});

module.exports = router;
