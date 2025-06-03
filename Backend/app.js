const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost/ecommerce');

app.use(cors());
app.use(express.json());

const routes = require('./routes');
app.use('/api', routes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
