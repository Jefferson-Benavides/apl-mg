const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb+srv://mastatan:g1zSKnBnE3iGSuSS@globant.pwzsxpf.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'apl';
const client = new MongoClient(url, { useUnifiedTopology: true });

const indexRouter = require('./routes/index');
const asociadosRouter = require('./routes/asociados');

app.use('/', indexRouter);
app.use('/asociados', asociadosRouter);

app.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
});
